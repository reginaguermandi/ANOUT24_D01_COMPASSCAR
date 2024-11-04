/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("cars", (table) => {
		table.increments("id").primary;
		table.text("brand").notNullable();
		table.text("model").notNullable();
		table.varchar("plate", 10).unique().notNullable();
		table.integer("year").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("cars");
};
