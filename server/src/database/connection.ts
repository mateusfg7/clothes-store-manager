import { config, Database, PostgresConnector, SQLite3Connector } from "../deps.ts";

const connector = Deno.args.includes("--dev")
  ? new SQLite3Connector(
    { filepath: "./src/database/clothes_manager_database.sqlite" },
  )
  : new PostgresConnector(
    {
      host: config().PG_HOST,
      username: config().PG_USER,
      password: config().PG_PASSWORD,
      database: config().PG_DATABASE,
    },
  );

const database = new Database(connector)

export default database;
