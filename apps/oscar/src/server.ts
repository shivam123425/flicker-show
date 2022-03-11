import "dotenv/config";
import express from "express";
import { requireAuth } from "server/middlewares";
import { DatabaseConnectionError } from "server/errors";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Oscar server is running at", PORT);
});
