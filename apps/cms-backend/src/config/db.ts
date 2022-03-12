import mongoose from "mongoose";

export async function initialiseDB() {
  const dbURI = process.env.DATABASE_URL;
  if (!dbURI) {
    throw new Error("DATABASE_URL not defined");
  }
  console.log("Initialising DB");
  await mongoose.connect(dbURI, {
    retryWrites: true,
    w: "majority",
    readPreference: "secondaryPreferred",
    maxStalenessSeconds: 90,
    readConcernLevel: "majority",
  });
  console.log("Successfully connected to the DB");
}
