const carService = require("../services/cars");

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

			return res.status(201).send(newCar);
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	},
};
