const knex = require("../database/config");

module.exports = {
	async insertCar(carData) {
		await knex("cars").insert(carData);
		const lastInsertion = await knex("cars").orderBy("id", "desc").first();

		return lastInsertion;
	},
};
