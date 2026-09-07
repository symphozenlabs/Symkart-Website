export const platformRoles = [
  'SUPER_ADMIN',
  'ADMIN',
  'SALES',
  'OPERATIONS',
  'SUPPORT',
  'FINANCE',
] as const;
export const businessRoles = ['OWNER', 'MANAGER', 'STAFF'] as const;
export const customerRoles = ['CUSTOMER'] as const;

export type PlatformRole = (typeof platformRoles)[number];
export type BusinessRole = (typeof businessRoles)[number];
export type CustomerRole = (typeof customerRoles)[number];
export type Role = PlatformRole | BusinessRole | CustomerRole;

export type Permission =
  | 'platform:manage'
  | 'business:manage'
  | 'business:read'
  | 'sales:manage'
  | 'operations:manage'
  | 'support:manage'
  | 'finance:manage'
  | 'customer:read';

export const rolePermissions: Readonly<Record<Role, readonly Permission[]>> = {
  SUPER_ADMIN: [
    'platform:manage',
    'business:manage',
    'business:read',
    'sales:manage',
    'operations:manage',
    'support:manage',
    'finance:manage',
    'customer:read',
  ],
  ADMIN: [
    'business:manage',
    'business:read',
    'sales:manage',
    'operations:manage',
    'support:manage',
    'finance:manage',
    'customer:read',
  ],
  SALES: ['business:read', 'sales:manage'],
  OPERATIONS: ['business:read', 'operations:manage'],
  SUPPORT: ['business:read', 'support:manage', 'customer:read'],
  FINANCE: ['business:read', 'finance:manage'],
  OWNER: [
    'business:manage',
    'business:read',
    'operations:manage',
    'customer:read',
  ],
  MANAGER: ['business:read', 'operations:manage', 'customer:read'],
  STAFF: ['business:read', 'operations:manage'],
  CUSTOMER: ['customer:read'],
};
