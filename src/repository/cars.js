const knex = require("../database/config");

module.exports = {
	async insertCar(carData) {
		await knex("cars").insert(carData);
		const lastInsertion = await knex("cars").orderBy("id", "desc").first();

		return lastInsertion;
	},

	async findPlate(plate) {
		return await knex("cars").where("plate", plate).first();
	},

	async findCarById(carId) {
		return await knex("cars").where("id", carId).first();
	},

	async carWithItems(carId) {
		return await knex("cars_items").select("name").where("car_id", carId);
	},

	async getCars({ filters, limit, offset }) {
		let query = knex("cars");

		// Adicionando filtros à query de forma simples
		if (filters.year) {
			query.where("year", ">=", filters.year);
		}

		if (filters.final_plate) {
			query.where("plate", "like", `%${filters.final_plate}`);
		}

		if (filters.brand) {
			query.where("brand", "like", `%${filters.brand}%`);
		}

		// Contando o total de registros (aqui eu faria uma query separada para simplificar)
		const countResult = await knex("cars")
			.where((qb) => {
				if (filters.year) qb.where("year", ">=", filters.year);
				if (filters.final_plate)
					qb.where("plate", "like", `%${filters.final_plate}`);
				if (filters.brand) qb.where("brand", "like", `%${filters.brand}%`);
			})
			.count("* as count");

		const count = countResult[0]["count"];

		// Buscando os registros com paginação
		const cars = await query.select("*").limit(limit).offset(offset);

		return { count, cars };
	},
};
