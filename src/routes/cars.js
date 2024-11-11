const express = require("express");
const routes = express.Router();

const CarsController = require("../controllers/car");
const validateItems = require("../middleware/items_validation");
const updateValidation = require("../middleware/update_validation");

routes.post("/api/v1/cars", CarsController.create);
routes.put("/api/v1/cars/:id/items", validateItems, CarsController.updateItems);
routes.get("/api/v1/cars/:id", CarsController.searchById);
routes.get("/api/v1/cars", CarsController.listCar);
routes.patch("/api/v1/cars/:id", updateValidation, CarsController.updateCar);
routes.delete("/api/v1/cars/:id", CarsController.deleteCar);

module.exports = routes;
