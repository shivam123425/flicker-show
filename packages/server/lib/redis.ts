import IORedis from "ioredis";

let redis: IORedis.Redis | null = null;

function connectToRedis(uri: string) {
  redis = new IORedis(uri);
}

function getRedisInstance() {
  if (!redis) {
    throw new Error("Redis not initialised");
  }
  return redis;
}

export { connectToRedis, getRedisInstance };
