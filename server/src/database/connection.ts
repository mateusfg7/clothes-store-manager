import { Database } from "https://deno.land/x/denodb/mod.ts";

const database = new Database("sqlite3", {
  filepath: "./clothes_manager_database.sqlite",
});

export default database;
