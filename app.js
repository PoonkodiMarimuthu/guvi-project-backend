const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/uploads", uploadRoutes);

module.exports = app;
