import { Pool } from "pg";
import cfg from "./config";

console.log("password");

const { host, database, user, password, port, test_database } = cfg.postgres;
const { nodeEnv } = cfg;

let pool = new Pool();

if (nodeEnv === "test") {
  pool = new Pool({
    host: host,
    database: database,
    user: user,
    password: password,
  });
}

if (nodeEnv === "dev") {
  pool = new Pool({
    host: host,
    database: test_database,
    user: user,
    password: password,
  });
}
console.log(password);
export default pool;
