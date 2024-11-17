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
  cost: integer('cost').notNull(),
  region: text('region'),
  energy: integer('energy')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  water: integer('water')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  gas: integer('gas')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  FLUORP: integer('FLUORP').default(0).notNull(),
  CFLRP: integer('CFLRP').default(0).notNull(),
  BULBP: integer('BULBP').default(0).notNull(),
  HALOP: integer('HALOP').default(0).notNull(),
  HIDP: integer('HIDP').default(0).notNull(),
  LEDP: integer('LEDP').default(0).notNull(),
  OTLTP: integer('OTLTP').default(0).notNull(),
  MAINHT: text('MAINHT').default('').notNull(),
  MAINCL: text('MAINCL').default('').notNull(),
});
