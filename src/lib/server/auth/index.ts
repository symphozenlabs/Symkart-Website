import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { getServerEnv } from '$lib/server/env';
import { getDatabase } from '$lib/server/db';
import { account, session, user, verification } from '$lib/server/db/schema';

export function getAuth() {
  const env = getServerEnv();
  return betterAuth({
    database: drizzleAdapter(getDatabase(), {
      provider: 'pg',
      schema: { user, session, account, verification },
    }),
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    emailAndPassword: { enabled: true },
    session: { expiresIn: 60 * 60 * 24 * 30, updateAge: 60 * 60 * 24 },
    advanced: { useSecureCookies: env.BETTER_AUTH_URL.startsWith('https://') },
  });
}

export type Auth = ReturnType<typeof getAuth>;
