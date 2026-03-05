import Itinerary from "../models/Itinerary.js";

export const generatePlan = async (req, res) => {
    try {

        const { destination, days, budget } = req.body;

        // Validation
        if (!destination || days === undefined || budget === undefined) {
            return res.status(400).json({
                error: "Destination, days, and budget are required.",
            });
        }

        if (typeof destination !== "string") {
            return res.status(400).json({
                error: "Destination must be a string.",
            });
        }

        if (typeof days !== "number" || isNaN(days)) {
            return res.status(400).json({
                error: "Days must be a valid number.",
            });
        }

        if (typeof budget !== "number" || isNaN(budget)) {
            return res.status(400).json({
                error: "Budget must be a valid number.",
            });
        }

        if (days <= 0) {
            return res.status(400).json({
                error: "Days must be greater than 0.",
            });
        }

        if (budget <= 0) {
            return res.status(400).json({
                error: "Budget must be greater than 0.",
            });
        }

        // Generate itinerary
        const itinerary = [];

        for (let i = 1; i <= days; i++) {
            if (i === days) {
                itinerary.push(
                    `Day ${i}: Shopping and departure from ${destination}`
                );
            } else {
                itinerary.push(
                    `Day ${i}: Explore attractions and local food in ${destination}`
                );
            }
        }

        // Save to MongoDB
        const savedPlan = new Itinerary({
            destination,
            days,
            budget,
            itinerary
        });

        await savedPlan.save();

        // Send response
        res.json(savedPlan);

    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }
};