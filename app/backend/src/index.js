import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Importing the auth router
import { router as authRouter } from "./modules/auth/auth.route.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
