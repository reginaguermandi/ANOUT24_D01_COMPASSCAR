const express = require("express");
const cors = require("cors");
const app = express();
const carRoutes = require("./routes/cars");

app.use(cors());
app.use(express.json());

app.use(carRoutes);

app.get("/", (req, res) => {
	res.send("Bem-Vindo a CompassCar!");
});

module.exports = app;
