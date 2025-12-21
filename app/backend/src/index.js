require("dotenv").config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// Importing the auth router
import authRouter from "./modules/auth/auth.route.js";
import userRouter from "./modules/user/user.route.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});


