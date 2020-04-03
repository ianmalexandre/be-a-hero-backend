const knex = require('knex');
const configuration = require('../../knexfile');

const config = proces.env.NODE_ENV == 'test' ? configuration.test

const connection = knex(configuration.development);

module.exports = connection;