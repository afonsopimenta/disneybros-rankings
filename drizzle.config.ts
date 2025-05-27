import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

const drizzleConfig = defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

export default drizzleConfig;
