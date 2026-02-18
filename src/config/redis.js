import Redis from "ioredis";
import ENV from "./env.js";

let redis;

export const connectRedis = () => {
    redis = new Redis({
        host: ENV.REDIS.HOST,
        port: ENV.REDIS.PORT,
        retryStrategy(times) {
            return Math.min(times * 50, 2000);
        },
    });

    redis.on("connect", () => {
        console.log("✅ Redis Connected");
    });

    redis.on("error", (err) => {
        console.error("❌ Redis Error:", err.message);
    });

    return redis;
};

export const getRedis = () => redis;
