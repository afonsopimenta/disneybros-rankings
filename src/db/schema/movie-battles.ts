import { integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";

import { usersTable } from "./auth";

export const moviesTable = pgTable("movies", {
  id: integer().primaryKey(),
  title: text().notNull(),
  image: text().notNull(),
});

export const leaderboardsTable = pgTable("leaderboards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ownerId: text().references(() => usersTable.id, { onDelete: "cascade" }),
});

export const movieRatingsTable = pgTable(
  "movie_ratings",
  {
    movieId: integer()
      .notNull()
      .references(() => moviesTable.id, { onDelete: "cascade" }),
    leaderboardId: integer()
      .notNull()
      .references(() => leaderboardsTable.id, { onDelete: "cascade" }),
    rating: integer().notNull(),
  },
  (table) => [primaryKey({ columns: [table.movieId, table.leaderboardId] })],
);
