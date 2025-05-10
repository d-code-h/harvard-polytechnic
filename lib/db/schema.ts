import {
  pgTable,
  unique,
  serial,
  text,
  timestamp,
  pgSequence,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const applicationIdSeq = pgSequence('application_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '9223372036854775807',
  cache: '1',
  cycle: false,
});

export const applicationsTable = pgTable(
  'applications',
  {
    id: serial().primaryKey().notNull(),
    applicationId: text('application_id'),
    surname: text().notNull(),
    firstName: text('first_name').notNull(),
    otherName: text('other_name'),
    email: text().notNull(),
    phone: text().notNull(),
    category: text().notNull(),
    program: text().notNull(),
    gender: text().notNull(),
    department: text().notNull(),
    password: text().notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
  },
  (table) => [
    unique('applications_application_id_key').on(table.applicationId),
    unique('applications_email_key').on(table.email),
    unique('applications_phone_key').on(table.phone),
  ],
);
