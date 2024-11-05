/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("cars_items").del();
	await knex("cars_items").insert([
		{ name: "Ar condicionado", car_id: 1 },
		{ name: "Trava elétrica", car_id: 1 },
		{ name: "Vidro elétrico", car_id: 1 },
		{ name: "Airbag", car_id: 1 },
		{ name: "Direção hidráulica", car_id: 1 },
	]);
};
