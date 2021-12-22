const Knex = require("knex");
const config = require('./knexfile');
const { Model } = require('objection');

const knex = Knex(config);

const initDB = () => {
	Model.knex(knex);
}

module.exports = {
    initDB
};