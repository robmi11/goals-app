const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.use("/api/goals", require("./routes/goalsRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`.bgMagenta.black);
});
