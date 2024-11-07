const { update } = require("../database/config");
const carService = require("../services/cars");
const itemService = require("../services/items");

module.exports = {
	async findAll(req, res) {
		try {
			const result = await carService.getAll();
			res.status(200).send(result);
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	},

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
			let items = req.body;

			const newItems = await itemService.insertCarItems(carId, items);
			return res.status(204).json(newItems);
		} catch (error) {
			return res.status(500).json({ errors: error.message });
		}
	},
};
