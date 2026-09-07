import { svelteKitHandler } from 'better-auth/svelte-kit';
import { getAuth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';
import { env as privateEnv } from '$env/dynamic/private';

const hasAuthConfiguration = Boolean(
  privateEnv.DATABASE_URL &&
    privateEnv.BETTER_AUTH_SECRET &&
    privateEnv.BETTER_AUTH_URL
);

export const handle: Handle = async ({ event, resolve }) => {
  if (!hasAuthConfiguration) return resolve(event);

  return svelteKitHandler({ event, resolve, auth: getAuth(), building: false });
};
