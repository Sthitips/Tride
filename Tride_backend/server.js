import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import planRoutes from "./routes/planRoutes.js";

dotenv.config();
connectDB();


const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());

app.use("/api", planRoutes);

app.get("/", (req, res) => {
    res.send("Tride backend is runnning...");
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});