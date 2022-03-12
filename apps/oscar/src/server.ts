import "dotenv/config";
import express from "express";
import { requireAuth } from "@shivam123425/express-common";
import { testingAuth } from "@routes/auth";

const app = express();
const PORT = process.env.PORT;

console.log(requireAuth);
testingAuth();

app.listen(PORT, () => {
  console.log("Oscar server is running at", PORT);
});
