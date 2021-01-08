import { Database } from "../deps.ts";

const database = new Database("sqlite3", {
  filepath: "./src/database/clothes_manager_database.sqlite",
});

export default database;
