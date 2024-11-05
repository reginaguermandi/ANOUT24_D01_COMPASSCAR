const express = require("express");
const app = express();
const carRoutes = require("./routes/cars");

app.use(express.json());

app.use(carRoutes);

app.get("/", (req, res) => {
	res.send("Bem-Vindo a CompassCar!");
});

module.exports = app;
