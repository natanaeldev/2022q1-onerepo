const db = require('../db');
const tableName = 'inventories';

const findAll = () => db(tableName);

module.exports = {
  findAll,
};
