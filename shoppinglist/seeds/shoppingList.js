
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {id: 1, colName: 'bread'},
        {id: 2, colName: 'milk'},
        {id: 3, colName: 'eggs'}
      ]);
    });
};
