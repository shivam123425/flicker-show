import "dotenv/config";
import express from "express";
import { requireAuth } from "server/middlewares";
import { DatabaseConnectionError } from "server/errors";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
