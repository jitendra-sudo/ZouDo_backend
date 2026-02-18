
import dotenv from "dotenv";
dotenv.config();

const ENV = {
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGO_URL: process.env.MONGO_URL,
    JWT: {
        ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE || "15m",
        REFRESH_EXPIRE: process.env.JWT_REFRESH_EXPIRE || "7d",
    },
    REDIS: {
        HOST: process.env.REDIS_HOST || "127.0.0.1",
        PORT: Number(process.env.REDIS_PORT) || 6379,
    },
};

export default ENV;
