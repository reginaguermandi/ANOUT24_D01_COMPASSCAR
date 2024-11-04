// Update with your config settings.
require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "mysql2",
		connection: {
			database: process.env.BD_NAME,
			user: process.env.BD_CLIENT,
			password: process.env.BD_PASSWORD,
		},
		migrations: {
			directory: `./src/database/migrations`,
		},
		seeds: {
			directory: `./src/database/seeds`,
		},
	},
};
