const Warehouse = require('../models/warehouse');
const Inventory = require('../models/inventory');

// The _ means "we aren't using this param at the moment"
exports.getWarehouses = (_req, res) => {
  Warehouse.findAll().then((warehouses) => res.json(warehouses));
};
