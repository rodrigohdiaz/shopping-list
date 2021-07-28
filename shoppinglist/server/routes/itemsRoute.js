// Define the routes for the repo
const express = require('express')
const router = express.Router()

const db = require('../db/db')

// put routes here
//Create a new item in the database
router.post('/', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then((id) => {
      const returnedId = Number(id[0])
      return db.getItem(returnedId)
    })  
    .then((item) => {
      res.status(201).json(item)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// Get all items records from database
router.get('/', (req, res) => {
  db.getItems()
    .then((allItems) => {
      res.status(200).json(allItems)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Get an item from the database by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then((item) => {
      res.status(201).json(item)
      return null
    })  
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Edit an item in the database
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.updateItem(id, req.body)
    .then(() => {
      const newId = Number(id)
      return db.getItem(newId)
    })
    .then((item) => {
      res.status(200).json(item)
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Delete an item from the database
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log("itemRoute DELETE:", id)
  db.deleteItemById(id)
    .then((post) => {
      return res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

module.exports = router

