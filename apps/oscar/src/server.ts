import "dotenv/config";
import express from "express";
import { requireAuth } from "@skgittix/common"

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Oscar server is running at", PORT);
});
