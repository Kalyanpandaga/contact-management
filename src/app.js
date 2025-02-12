import express from "express";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/", contactRoutes);

// Database connection
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;
