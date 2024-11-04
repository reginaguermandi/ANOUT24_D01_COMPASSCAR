/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("cars_items", (table) => {
		table.increments("id");
		table.text("name");
		table.integer("car_id").unsigned().notNullable();
		table.foreign("car_id").references("cars.id").deferrable;
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("cars_items");
};
