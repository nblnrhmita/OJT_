require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// Importing the auth router
import { router as authRouter } from "./modules/auth/auth.route.js";
// import { router as beasiswaRouter } from "./modules/beasiswa/beasiswa.route.js";


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);

// app.use("/beasiswa", beasiswaRouter);

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});


