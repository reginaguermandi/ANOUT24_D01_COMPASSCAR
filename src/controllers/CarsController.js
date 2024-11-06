const carService = require("../services/cars");

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
			return res.status(201).send(newCar);
		} catch (error) {
			if (error.name === "ValidationError") {
				return res.status(400).send({ error: error.message });
			}
			return res.status(500).send({ error: error.message });
		}
	},
};
