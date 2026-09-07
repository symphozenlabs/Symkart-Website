export const plans = {
  SMART: {
    name: 'Smart',
    entitlements: {
      products: 50,
      categories: 10,
      mediaAssetsPerProduct: 5,
      mediaBytesPerProduct: 5_000_000,
    },
  },
  ENTERPRISE: {
    name: 'Enterprise',
    entitlements: {
      products: Infinity,
      categories: Infinity,
      mediaAssetsPerProduct: 5,
      mediaBytesPerProduct: 10_000_000,
    },
  },
} as const;

export type PlanKey = keyof typeof plans;
export type Entitlement = keyof (typeof plans)['SMART']['entitlements'];

export function entitlementLimit(plan: PlanKey, entitlement: Entitlement) {
  return plans[plan].entitlements[entitlement];
}

export function meetsEntitlement(
  plan: PlanKey,
  entitlement: Entitlement,
  requested: number,
) {
  return requested <= entitlementLimit(plan, entitlement);
}
