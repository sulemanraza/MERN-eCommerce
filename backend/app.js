const express = require("express");
const app = express();
const userRoute = require("./src/routes/users/userRoutes");

// middleware ===========================================
app.use(express.json());
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes ===============================================
app.use("/users", userRoute);

module.exports = app;
