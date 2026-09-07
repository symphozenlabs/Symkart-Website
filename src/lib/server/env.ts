import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { z } from 'zod';

const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url().startsWith('postgres'),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url(),
});

const publicEnvSchema = z.object({
  PUBLIC_APP_NAME: z.string().default('SYMKART'),
  PUBLIC_APP_URL: z.string().url(),
});

export function getServerEnv() {
  return serverEnvSchema.parse(privateEnv);
}

export function getPublicEnv() {
  return publicEnvSchema.parse(publicEnv);
}
