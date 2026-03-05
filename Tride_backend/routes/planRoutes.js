import express from "express";
import { generatePlan } from "../controllers/planControllers.js";

const router = express.Router();

router.post("/plan", generatePlan);

export default router;