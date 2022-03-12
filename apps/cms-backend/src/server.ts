import "dotenv/config";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@skgittix/common";

import { initialiseDB } from "./config/db";
import { initialiseRedis } from "./config/redis";

import showRoutes from "@routes/show";
import userRoutes from "@routes/user";

const isNonProdEnv = process.env.NODE_ENV !== "production";

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: function (origin, callback) {
      if (isNonProdEnv) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json());

app.use(
  cookieSession({
    secure: true,
    signed: false,
  })
);

app.use(currentUser);

app.use("/show", showRoutes);
app.use("/user", userRoutes);

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
