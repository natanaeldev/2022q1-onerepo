const Warehouse = require('../models/warehouse');
const Inventory = require('../models/inventory');

// The _ means "we aren't using this param at the moment"
exports.getInventories = (_req, res) => {
  Inventory.findAll().then((inventories) => res.json(inventories));
};
