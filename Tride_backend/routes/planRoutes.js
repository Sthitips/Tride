const express = require("express");
const router = express.Router();

const {generatePlan} = require("../controllers/planControllers");
router.post("/plan", generatePlan);

module.exports= router;