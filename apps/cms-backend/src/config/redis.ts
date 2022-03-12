import IORedis from "ioredis";

let redis: IORedis.Redis | null = null;

export async function initialiseRedis() {
  const redisURI = process.env.REDIS_URL;
  if (!redisURI) {
    throw new Error("REDIS_URL not defined");
  }
  redis = new IORedis();
  console.log("Successfully connected to redis");
}

export async function getRedisInstance() {
  if (!redis) {
    throw new Error("Redis not initialised");
  }
  return redis;
}
