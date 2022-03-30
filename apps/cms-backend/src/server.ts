import "dotenv/config";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@shivam123425/express-common";

import { initialiseDB } from "./config/db";
import { initialiseRedis } from "./config/redis";

import showRoutes from "@routes/show";
import userRoutes from "@routes/user";

const isProdEnv = import.meta.env.PROD;

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: function (origin, callback) {
      if (isProdEnv) {
        return callback(new Error("Not allowed by CORS"));
      }
      return callback(null, true);
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

(async () => {
  await initialiseDB();
  await initialiseRedis();
})();

if (import.meta.env.PROD) {
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log("CMS backend server is running at", PORT);
  });
}

export const viteNodeApp = app;
