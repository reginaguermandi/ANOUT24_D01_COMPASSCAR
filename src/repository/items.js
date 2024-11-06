const knex = require("../database/config");

module.exports = {
	async deleteItemsByCarId(carId) {
		return (await knex("cars_items").where("car_id")).del();
	},

	async insertItems(itemRecords) {
		return await knex("cars_items").insert(itemRecords);
	},
};
