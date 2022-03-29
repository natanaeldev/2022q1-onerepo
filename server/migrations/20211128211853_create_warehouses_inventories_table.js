exports.up = function (knex) {
  return knex.schema.createTable('warehouses_inventories', function (table) {
    table
      .uuid('inventory_id')
      .references('id')
      .inTable('inventories')
      .defaultTo(knex.raw('(UUID())'));
    table
      .uuid('warehouse_id')
      .references('id')
      .inTable('warehouses')
      .defaultTo(knex.raw('(UUID())'));
    table.string('status').notNullable();
    table.integer('quantity').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('warehouses_inventories');
};
