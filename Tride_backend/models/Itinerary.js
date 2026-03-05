import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    destination: String,
    days: Number,
    budget: Number,
    itinerary: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

export default Itinerary;