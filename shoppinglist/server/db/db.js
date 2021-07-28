// Create database side of api functions
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getItems,
  addItem,
  getItem,
  updateItem,
  deleteItemById
}

// Create getItems function for api on server/database side
function getItems (db = connection) {
  return db('shopping_list').select()
}

// Create addItems function for api on server/database side
function addItem (newItem, db = connection) {
  return db('shopping_list').insert(newItem)
}

// Create getItem function for api on server/database side
function getItem (id, db = connection) {
  return db('shopping_list').where('shopping_list.id', id).select('id', 'item')
}

// Create updateItem function for api on server/database side
function updateItem (id, update, db = connection) {
  return db('shopping_list').where('shopping_list.id', id).update(update)
}

// Create deleteItemById function for api on server/database side
function deleteItemById(id, db = connection) {
  return db('shopping_list').where('shopping_list.id', id).delete()
}