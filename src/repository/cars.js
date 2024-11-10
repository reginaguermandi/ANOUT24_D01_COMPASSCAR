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

	async deleteCarAndItems(carId) {
		await knex.transaction(async function (trx) {
			await trx("cars_items").where({ car_id: carId }).del();
			await trx("cars").where({ id: carId }).del();
		});
	},
};
