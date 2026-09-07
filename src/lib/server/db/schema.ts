import { boolean, pgEnum, pgTable, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const businessStatus = pgEnum('business_status', ['ACTIVE', 'SUSPENDED', 'ARCHIVED']);
export const storeStatus = pgEnum('store_status', ['DRAFT', 'ACTIVE', 'SUSPENDED', 'ARCHIVED']);
export const membershipStatus = pgEnum('membership_status', ['INVITED', 'ACTIVE', 'SUSPENDED', 'REVOKED']);
export const businessRole = pgEnum('business_role', ['OWNER', 'MANAGER', 'STAFF']);

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  platformRole: text('platform_role'),
  mustChangePassword: boolean('must_change_password').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const business = pgTable('business', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  status: businessStatus('status').notNull().default('ACTIVE'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const businessProfile = pgTable('business_profile', {
  businessId: text('business_id').primaryKey().references(() => business.id, { onDelete: 'cascade' }),
  legalName: text('legal_name'),
  contactEmail: text('contact_email'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const store = pgTable('store', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => business.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  status: storeStatus('status').notNull().default('DRAFT'),
  themeReference: text('theme_reference'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({ businessSlugUnique: uniqueIndex('store_business_slug_unique').on(table.businessId, table.slug) }));

export const membership = pgTable('membership', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => business.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  role: businessRole('role').notNull(),
  status: membershipStatus('status').notNull().default('ACTIVE'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({ userBusinessUnique: uniqueIndex('membership_user_business_unique').on(table.businessId, table.userId) }));

export const onboarding = pgTable('onboarding', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  businessId: text('business_id').notNull().references(() => business.id, { onDelete: 'cascade' }),
  state: text('state').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  completedAt: timestamp('completed_at')
});

export const schema = { user, session, account, verification, business, businessProfile, store, membership, onboarding };
