import { connectToRedis } from "server/lib/redis";

export async function initialiseRedis() {
  console.log("Initialising redis");
  await connectToRedis(process.env.REDIS_URL!);
  console.log("Successfully connected to redis");
}
