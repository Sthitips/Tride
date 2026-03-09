import express from "express";
import { getItineraries ,generatePlan } from "../controllers/planControllers.js";

const router = express.Router();

router.post("/plan", generatePlan);
router.get("/itineraries", getItineraries);

export default router;