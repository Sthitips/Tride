exports.generatePlan = (req, res) => {
    const { destination, days, budget } = req.body;

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

    res.json({
        destination,
        days,
        budget,
        itinerary,
    });
}