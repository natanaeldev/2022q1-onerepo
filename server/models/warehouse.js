const db = require('../db');
const tableName = 'warehouses';

// SELECT * FROM warehouses
const findAll = () => db(tableName);

module.exports = {
  findAll,
};
