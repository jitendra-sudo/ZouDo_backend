import app from "./app.js";
import cluster from "cluster";
import os from "os";
import ENV from "./config/env.js";
import connectDB from "./config/database.js";
import { connectRedis } from "./config/redis.js";

const numCPUs = os.cpus().length;

const startWorker = async () => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(ENV.PORT, () => {
      console.log(
        `🚀 Worker ${process.pid} listening on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`
      );
    });
  } catch (error) {
    console.error("❌ Failed to start worker:", error);
    process.exit(1);
  }
};

if (cluster.isPrimary) {
  console.log(`🧠 Primary ${process.pid} running`);
  console.log(`📊 Forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.warn(
      `⚠ Worker ${worker.process.pid} died (code: ${code}, signal: ${signal}). Restarting...`
    );
    cluster.fork();
  });
} else {
  startWorker();
}
