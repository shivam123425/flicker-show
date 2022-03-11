import mongoose from "mongoose";

export async function initialiseDB() {
  const URI = process.env.DATABASE_URL!;
  console.log("Initialising DB");
  await mongoose.connect(URI);
  console.log("Successfully connected to the DB");
}
