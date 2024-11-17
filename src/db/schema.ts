import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';

export const portfolio = pgTable('portfolio', {
  id: serial('id').primaryKey(),
});
export const building = pgTable('building', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('name').notNull(),
  location: text('location').notNull(),
  squareFeet: integer('squareFeet').notNull(),
});

export const dataSource = pgTable('dataSource', {
  id: uuid('id').defaultRandom().primaryKey(),
  type: text('type').notNull(),
  location: text('location').notNull(),
  buildingId: uuid('buildingId').notNull(),
});

export const buildingRelations = relations(building, ({ many }) => ({
  dataSources: many(dataSource),
}));

export const dataSourceRelations = relations(dataSource, ({ one }) => ({
  building: one(building, {
    fields: [dataSource.buildingId],
    references: [building.id],
  }),
}));
