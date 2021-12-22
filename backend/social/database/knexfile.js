const config = {
	client: 'pg',
	connection: {
		host: "postgres",
		database: "social",
		user: "postgres",
		password: "postgres",
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: "./migrations"
	}
};


module.exports = config;