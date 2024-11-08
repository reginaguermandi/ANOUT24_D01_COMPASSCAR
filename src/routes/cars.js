const express = require("express");
const routes = express.Router();

const CarsController = require("../controllers/car");
const validateItems = require("../middleware/items_validation");

routes.post("/api/v1/cars", CarsController.create);
routes.put("/api/v1/cars/:id/items", validateItems, CarsController.updateItems);

module.exports = routes;
