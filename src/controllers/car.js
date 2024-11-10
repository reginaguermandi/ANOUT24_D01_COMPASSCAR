const { update } = require("../database/config");
const carService = require("../services/cars");
const itemService = require("../services/items");

module.exports = {
	async create(req, res) {
		try {
			const { brand, model, year, plate } = req.body;
			const newCar = await carService.createCar({
				brand,
				model,
				year,
				plate,
			});

			if (newCar.errors) {
				if (newCar.errors.includes("plate already registered")) {
					return res.status(409).json({ errors: newCar.errors });
				}

				return res.status(400).json({ errors: newCar.errors });
			}
			return res.status(201).send(newCar);
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	},

	async updateItems(req, res) {
		try {
			const carId = req.params.id;
			const items = req.body;

			const newItems = await itemService.insertCarItems(carId, items);

			if (newItems.errors) {
				return res.status(400).json(newItems);
			}

			return res.status(204).json(newItems);
		} catch (error) {
			return res.status(500).json({ errors: error.message });
		}
	},

	async searchById(req, res) {
		try {
			const carId = req.params.id;

			const car = await carService.findCar(carId);
			if (!car) {
				return res.status(404).json({ errors: "car not found" });
			}
			return res.status(200).json(car);
		} catch (error) {
			return res.status(500).json({ errors: error.message });
		}
	},

	async deleteCar(req, res) {
		try {
			const carId = req.params.id;
			const result = await carService.deleteCar(carId);

			if (!result) {
				return res.status(404).json({ errors: ["car not found"] });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(500).json({ errors: error.message });
		}
	},
};
