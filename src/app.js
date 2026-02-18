import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get("/health", (req, res) => {
    res.send({ success: true, message: "Server is healthy 🚀", });
});

export default app;
