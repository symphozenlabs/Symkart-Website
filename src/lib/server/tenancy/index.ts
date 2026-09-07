import { TenantAccessError, TenantNotFoundError } from '$lib/server/errors';
import type { AuthenticatedPrincipal } from '$lib/server/authorization';

export interface Tenant {
  id: string;
  slug: string;
  name: string;
}

export interface TenantMembership {
  tenantId: string;
  userId: string;
  role: AuthenticatedPrincipal['role'];
}

export interface TenantResolver {
  byId(id: string): Promise<Tenant | null>;
  byHostname(hostname: string): Promise<Tenant | null>;
  membership(
    tenantId: string,
    userId: string,
  ): Promise<TenantMembership | null>;
}

export async function resolveTenantById(resolver: TenantResolver, id: string) {
  const tenant = await resolver.byId(id);
  if (!tenant) throw new TenantNotFoundError();
  return tenant;
}

export async function requireTenantAccess(
  resolver: TenantResolver,
  principal: AuthenticatedPrincipal | null | undefined,
  tenantId: string,
) {
  if (!principal) throw new TenantAccessError();
  const tenant = await resolveTenantById(resolver, tenantId);
  if (principal.role === 'SUPER_ADMIN') return tenant;
  const membership = await resolver.membership(tenant.id, principal.id);
  if (!membership) throw new TenantAccessError();
  return tenant;
}

export async function resolveStorefrontTenant(
  resolver: TenantResolver,
  hostname: string,
) {
  const tenant = await resolver.byHostname(hostname);
  if (!tenant) throw new TenantNotFoundError();
  return tenant;
}
