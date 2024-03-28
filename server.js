import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { nanoid } from "nanoid";
import express from "express";

import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(morgan("dev"));
import { body, cookie, validationResult } from "express-validator";
import cloudinary from "cloudinary";

//router
import jobRouter from "./routes/jobRouter.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

import { authenticateUser } from "./middleware/authMiddleware.js";

import cookieParser from "cookie-parser";

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

/*try {
  const response = await fetch(
    "https:/www/course-api.com/react-useReduce-cart-project"
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}
*/

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

/*
//GET ALL JOBS
app.get("/api/v1/jobs");

//CREATE JOB
app.get("/api/v1/jobs");

//GET SINGLOLE JOB
app.get("/api/v1/jobs/:id");

//EDIT JOB
app.patch("/api/v1/jobs/:id");

//DELETE JOB
app.delete("/api/v1/jobs/:id"); */

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
//dummy
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs }); //200 means moving smootly; 404 means resource not found
});
const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

//mongodb+srv://gunasekharreddymorusu999:<password>@cluster0.uvxb750.mongodb.net/
