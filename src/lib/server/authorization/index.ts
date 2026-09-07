import { AuthorizationError, AuthenticationError } from '$lib/server/errors';
import { rolePermissions, type Permission, type Role } from '$lib/types/roles';

export interface AuthenticatedPrincipal {
  id: string;
  role: Role;
  tenantId?: string;
}

export function hasPermission(role: Role, permission: Permission) {
  return rolePermissions[role].includes(permission);
}

export function requirePrincipal(
  principal: AuthenticatedPrincipal | null | undefined,
): AuthenticatedPrincipal {
  if (!principal) throw new AuthenticationError();
  return principal;
}

export function requirePermission(
  principal: AuthenticatedPrincipal | null | undefined,
  permission: Permission,
) {
  const current = requirePrincipal(principal);
  if (!hasPermission(current.role, permission)) throw new AuthorizationError();
  return current;
}
