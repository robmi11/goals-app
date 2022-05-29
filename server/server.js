const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { customErrorHadler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.SERVER_PORT;

connectDB();
const app = express();

//These lines are required in order to be ables to read body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalsRoutes"));
app.use(customErrorHadler);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`.bgMagenta.black);
});
