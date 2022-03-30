import "dotenv/config";
import express from "express";
import { requireAuth } from "@shivam123425/express-common";
import { testingAuth } from "@routes/auth";

const app = express();

console.log(requireAuth);
testingAuth();

if (import.meta.env.PROD) {
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log("Oscar server is running at", PORT);
  });
}

export const viteNodeApp = app;
