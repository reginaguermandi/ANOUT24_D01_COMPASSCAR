const knex = require("../database/config");

module.exports = {
	async deleteItemsByCarId(carId) {
		return await knex("cars_items").where("car_id", carId).del();
	},

	async insertItems(itemsToInsert) {
		return await knex("cars_items").insert(itemsToInsert);
	},
};
