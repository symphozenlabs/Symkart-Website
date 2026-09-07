import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { getServerEnv } from '$lib/server/env';
import { schema } from './schema';

export function getDatabase() {
  const { DATABASE_URL } = getServerEnv();
  const sql = neon(DATABASE_URL);
  return drizzle(sql, { schema });
}

export type Database = ReturnType<typeof getDatabase>;
