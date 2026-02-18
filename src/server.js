import app from "./app.js";
import ENV from "./config/env.js";
import connectDB from "./config/database.js";
import { connectRedis } from "./config/redis.js";

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(ENV.PORT, () => {
      console.log(
        `🚀 Server running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`
      );
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
