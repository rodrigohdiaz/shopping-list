const config = require('./knexfile').development
const database = require('knex')(config)

function getAll (db = database) {
    return db('shopping_list').select()
}

function close (db = database) {
    db.destroy()
}

// creating delete functionality
function deleteRecord (id, db = database) {
    return db('shopping_list')
    .where('shopping_list', id)
    .delete()
}

// creating update funcionality
function updateRecord (id, db = database) {
    return db('shopping_list')
    .where('shopping_list.id', id)
    .update('item')
  }



module.exports = {
    getAll,
    close,
    deleteRecord,
    updateRecord
}