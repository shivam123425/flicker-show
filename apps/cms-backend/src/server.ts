import "dotenv/config";
import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@skgittix/common";

import { initialiseDB } from "./config/db";
import { initialiseRedis } from "./config/redis";

import showRoutes from "@routes/show";

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    secure: true,
    signed: false,
  })
);

app.use(currentUser);

app.use("/show", showRoutes);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  await initialiseDB();
  await initialiseRedis();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log("CMS backend server is running at", PORT);
  });
};

start();
