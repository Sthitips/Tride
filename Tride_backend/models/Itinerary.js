import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  destination: String,
  days: Number,
  budget: Number,

  budget_breakdown: Object,

  hotels: [
    {
      name: String,
      location: String,
      price_range: String,
      description: String
    }
  ],

  cafes: [
    {
      name: String,
      location: String,
      specialty: String,
      price_range: String
    }
  ],

  daily_cost: [Number],

  itinerary: [
    {
      day: Number,
      theme: String,
      activities: [String]
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

export default Itinerary