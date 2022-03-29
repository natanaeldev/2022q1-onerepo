exports.up = function (knex) {
  return knex.schema.createTable('inventories', function (table) {
    // table.increments();
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('item_name').notNullable();
    table.string('description').notNullable();
    table.string('category').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('inventories');
};
