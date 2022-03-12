import "dotenv/config";
import express from "express";
import { requireAuth } from "@skgittix/common";

import { initialiseDB } from "./config/db";
import { initialiseRedis } from "./config/redis";

import { Show } from "@models/Show";

const app = express();
const PORT = process.env.PORT;

console.log(Show);

(async () => {
  await initialiseDB();
  await initialiseRedis();

  app.listen(PORT, () => {
    console.log("CMS backend server is running at", PORT);
  });
})();
