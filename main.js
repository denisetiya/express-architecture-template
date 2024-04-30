import express from "express";
import cors from "cors";
import limiter from "express-rate-limit";
import dotenv from "dotenv";
import router from "./route/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(limiter({ windowMs: 60 * 1000, max: 100 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));
app.use(express.static("assets"));

app.use(router);

// 404 Page Not Found
app.all("*", (req, res) => {
  res.json({ message: "page not found" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
