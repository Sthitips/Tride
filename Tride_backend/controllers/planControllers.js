import Itinerary from "../models/Itinerary.js";
import { generateTravelPlan } from "../services/aiService.js";

export const generatePlan = async (req, res) => {
    console.log("request recieved:", req.body);
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
        console.log("Calling AI service...");
        const aidata = await generateTravelPlan(destination, days, budget);
        console.log("AI response received:", aidata);

        // --- normalize cafes ---
        if (Array.isArray(aidata.cafes)) {
            aidata.cafes = aidata.cafes.map((cafe) => {
                if (typeof cafe === "string") {
                    return {
                        name: cafe,
                        location: "",
                        specialty: "",
                        price_range: ""
                    };
                }
                return cafe;
            });
        }

        // --- normalize itinerary ---
        if (Array.isArray(aidata.itinerary)) {
            aidata.itinerary = aidata.itinerary.map((dayObj, index) => {
                let dayNumber = dayObj.day;

                if (typeof dayNumber === "string") {
                    const match = dayNumber.match(/\d+/);
                    dayNumber = match ? Number(match[0]) : index + 1;
                }

                return {
                    day: dayNumber,
                    theme: dayObj.theme || "",
                    activities: dayObj.activities || []
                };
            });
        }


        // Save to MongoDB
        const savedPlan = new Itinerary({
            destination,
            days,
            budget,
            ...aidata
        });

        await savedPlan.save();

        // Send response
        res.json(savedPlan);

    } catch (error) {
        console.error("PLAN GENERATION ERROR:", error);

        res.status(500).json({
            error: error.message
        });

    }
};

export const getItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find().sort({ createdAt: -1 });
        res.json(itineraries);
    } catch (error) {
        res.status(500).json({
            error: "failed to fetch itineraries"
        });
    }
};