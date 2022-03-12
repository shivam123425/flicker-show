import IORedis from "ioredis";

let redis: IORedis.Redis | null = null;

export async function initialiseRedis() {
  redis = new IORedis(process.env.REDIS_URL!);
  console.log("Successfully connected to redis");
}

export async function getRedisInstance() {
  if (!redis) {
    throw new Error("Redis not initialised");
  }
  return redis;
}
