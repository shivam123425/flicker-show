import "dotenv/config";
import express from "express";
import { initialiseDB } from "./config/db";
import { initialiseRedis } from "./config/redis";

import { requireAuth } from "server/middlewares";
import { DatabaseConnectionError } from "server/errors";

const app = express();
const PORT = process.env.PORT;

(async () => {
  await initialiseDB();
  await initialiseRedis();

  app.listen(PORT, () => {
    console.log("CMS backend server is running at", PORT);
  });
})();
