import {
  index,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { sql } from 'drizzle-orm';

export const createTable = pgTableCreator((name) => `daye_${name}`);

export const users = createTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    email: text('email').notNull(),
    cart: text('cart')
      .array()
      .default(sql`'{}'::text[]`),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt'),
  },
  (users) => {
    return {
      nameIndex: index('name_index').on(users.name),
    };
  }
);

