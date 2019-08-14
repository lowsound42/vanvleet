const express = require("express");
const router = express.Router();
const inventoryData = require('../data/inventory.json');

//express middleware config

router.get('/', (req, res) => {
  res.json(inventoryData);
})

module.exports = router;
