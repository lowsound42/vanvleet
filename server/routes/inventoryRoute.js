const express = require("express");
const router = express.Router();
const inventoryData = require('../data/inventory.json');

//express middleware config

router.get('/', (req, res) => {
  res.json(inventoryData);
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  var product = inventoryData.filter(item => item.id === req.params.id)
  res.json(product);
})

module.exports = router;
