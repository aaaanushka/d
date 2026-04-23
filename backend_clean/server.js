const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server working");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});