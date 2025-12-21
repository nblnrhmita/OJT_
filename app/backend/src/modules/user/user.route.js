import express from "express";
import { users } from "./user.controller";

const router = express.Router();

router.get("/", users);

export default router;
