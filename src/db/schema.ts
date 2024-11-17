import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';

export const portfolio = pgTable('portfolio', {
  id: serial('id').primaryKey(),
});
export const building = pgTable('building', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('name').notNull(),
  location: text('location').notNull(),
  squareFeet: integer('squareFeet').notNull(),
  energy: integer('energy')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  water: integer('water')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
});
