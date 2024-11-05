const express = require("express");
const routes = express.Router();

const CarsController = require("../controllers/CarsController");

routes.post("/api/v1/cars", CarsController.create);

module.exports = routes;
