exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {id: 1, item: 'bread'},
        {id: 2, item: 'milk'},
        {id: 3, item: 'eggs'}
      ]);
    });
};