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

			if (newCar.errors) {
				// Verifica se o erro é relacionado à placa já registrada
				if (newCar.errors.includes("plate already registered")) {
					return res.status(409).json({ errors: newCar.errors });
				}
				// Caso contrário, retorna os erros com o status 400
				return res.status(400).json({ errors: newCar.errors });
			}
			return res.status(201).send(newCar);
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	},
};
