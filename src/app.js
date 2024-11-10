const express = require("express");
const cors = require("cors");
const app = express();
const carRoutes = require("./routes/cars");
const errorMiddleware = require("./middleware/gereneric_error");

app.use(cors());
app.use(express.json());

app.use(carRoutes);
app.use(errorMiddleware);

module.exports = app;
