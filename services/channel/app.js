const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const channelRoutes = require("./routes/channels");

mongoose.connect(process.env.MONGO_ATLAS_URI).then(() => {
  console.log("Connected to database");
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// avoid cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next(); // continue to next middleware
});

//Routes which should handle requests
app.use("/channels", channelRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(process.env.PORT || 6000, () => {
  console.log("Server is up on port 3000");
});

module.exports = app;

//install --save-dev nodemon : for restarting the server when code changes
//install --save morgan : for the error handling
//install --save body-parser : for the body of the request
