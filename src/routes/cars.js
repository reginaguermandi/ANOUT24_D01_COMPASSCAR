const express = require("express");
const routes = express.Router();

const CarsController = require("../controllers/car");

routes.post("/api/v1/cars", CarsController.create);
routes.put("/api/v1/cars/:id/items", CarsController.updateItems);

module.exports = routes;
