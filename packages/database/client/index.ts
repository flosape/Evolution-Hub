import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import * as schema from "../drizzle/schema.ts";

export function createDatabaseClient(connectionString: string) {
  const client = new Client({
    connectionString,
  });

  const db = drizzle(client, { schema });

  return {
    client,
    db,
  };
}
