import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running at", PORT);
  console.log("UPDATING.....")
});
