import { config, Database } from "../deps.ts";

const database = Deno.args.includes("--dev")
  ? new Database(
    "sqlite3",
    { filepath: "./src/database/clothes_manager_database.sqlite" },
  )
  : new Database(
    "postgres",
    {
      host: config().PG_HOST,
      username: config().PG_USER,
      password: config().PG_PASSWORD,
      database: config().PG_DATABASE,
    },
  );

export default database;
