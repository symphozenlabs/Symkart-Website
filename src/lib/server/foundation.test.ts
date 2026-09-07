import { describe, expect, it } from 'vitest';
import { hasPermission, requirePermission } from './authorization';
import { requireTenantAccess, type TenantResolver } from './tenancy';
import { AuthorizationError, TenantAccessError } from './errors';

const resolver: TenantResolver = {
  byId: async (id) => ({ id, slug: id, name: 'Test tenant' }),
  byHostname: async () => null,
  membership: async (tenantId, userId) =>
    tenantId === 'tenant-a' && userId === 'owner-1'
      ? { tenantId, userId, role: 'OWNER' }
      : null,
};

describe('authorization foundation', () => {
  it('maps roles to permissions centrally', () => {
    expect(hasPermission('OWNER', 'business:manage')).toBe(true);
    expect(hasPermission('STAFF', 'finance:manage')).toBe(false);
    expect(() =>
      requirePermission({ id: 'staff-1', role: 'STAFF' }, 'finance:manage'),
    ).toThrow(AuthorizationError);
  });

  it('enforces membership for tenant access', async () => {
    await expect(
      requireTenantAccess(
        resolver,
        { id: 'owner-1', role: 'OWNER' },
        'tenant-a',
      ),
    ).resolves.toMatchObject({ id: 'tenant-a' });
    await expect(
      requireTenantAccess(
        resolver,
        { id: 'owner-1', role: 'OWNER' },
        'tenant-b',
      ),
    ).rejects.toThrow(TenantAccessError);
  });

  it('allows platform super admins to cross tenant boundaries', async () => {
    await expect(
      requireTenantAccess(
        resolver,
        { id: 'admin-1', role: 'SUPER_ADMIN' },
        'tenant-b',
      ),
    ).resolves.toMatchObject({ id: 'tenant-b' });
  });
});
