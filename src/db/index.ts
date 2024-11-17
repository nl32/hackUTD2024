import { neon } from '@neondatabase/serverless';
import { env } from 'src/env.mjs';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const neon_client = neon(env.DATABASE_URL);
export const db = drizzle(neon_client, { schema });
