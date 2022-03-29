exports.seed = function (knex) {
  let warehouseIds, inventoryIds;
  const OUT_OF_STOCK_CHANCE = 0.35;
  const MAX_WAREHOUSE_ITEM_LIMIT = 10000;
  const data = [];

  // Deletes ALL existing entries
  return knex('warehouses_inventories')
    .del()
    .then(() => {
      return knex('warehouses')
        .pluck('id')
        .then((wIds) => {
          warehouseIds = wIds;
        });
    })
    .then(() => {
      return knex('inventories')
        .pluck('id')
        .then((iIds) => {
          inventoryIds = iIds;
        });
    })
    .then(function () {
      // Inserts seed entries
      console.log(warehouseIds);
      console.log(inventoryIds);
      warehouseIds.forEach((wID) => {
        inventoryIds.forEach((iID) => {
          let temp = { warehouse_id: wID, inventory_id: iID };
          if (Math.random() < OUT_OF_STOCK_CHANCE) {
            temp = { ...temp, status: 'Out of stock', quantity: 0 };
          } else {
            temp = {
              ...temp,
              status: 'In stock',
              quantity: Math.floor(Math.random() * MAX_WAREHOUSE_ITEM_LIMIT),
            };
          }
          // console.log(temp);
          data.push(temp);
        });
      });
      console.log(data);
      return knex('warehouses_inventories').insert(data);
    });
};
