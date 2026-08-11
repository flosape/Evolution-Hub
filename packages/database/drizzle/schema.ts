import {
  pgTable,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const teams = pgTable("teams", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});

export const teamMemberships = pgTable("team_memberships", {
  id: uuid("id").primaryKey(),
  teamId: uuid("team_id")
    .notNull()
    .references(() => teams.id),
  memberId: uuid("member_id").notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});

export const teamRoles = pgTable("team_roles", {
  id: uuid("id").primaryKey(),
  teamId: uuid("team_id")
    .notNull()
    .references(() => teams.id),
  name: varchar("name", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});
