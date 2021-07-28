exports.up = function(knex) {
  return knex.schema.createTable('shopping_list', table => {
      table.increments('id')
      table.string('item')
    })
};

exports.down = (knex) => {
      return knex.schema.dropTable('shopping_list')
};
