exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
<<<<<<< HEAD:shoppinglist/seeds/shoppingList.js
        {id: 1, Item: 'bread'},
        {id: 2, Item: 'milk'},
        {id: 3, Item: 'eggs'}
||||||| 2fc38f6:shoppinglist/seeds/shoppingList.js
        {id: 1, colName: 'bread'},
        {id: 2, colName: 'milk'},
        {id: 3, colName: 'eggs'}
=======
        {id: 1, item: 'bread'},
        {id: 2, item: 'milk'},
        {id: 3, item: 'eggs'}
>>>>>>> b5750f80d394739bc58044ad938ee3679f75eb2b:server/db/seeds/shoppingList.js
      ]);
    });
};