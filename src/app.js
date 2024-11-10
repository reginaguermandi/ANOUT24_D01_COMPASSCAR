const express = require("express");
const cors = require("cors");
const app = express();
const carRoutes = require("./routes/cars");

app.use(cors());
app.use(express.json());

app.use(carRoutes);

app.use((err, req, res, next) => {
	console.error(err);

	res.status(500).json({
		errors: ["an internal server error occurred"],
	});
});

module.exports = app;
