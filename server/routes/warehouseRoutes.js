const express = require("express");
const router = express.Router();
const warehouseData = require('../data/locations.json');

//express middleware config

router.get('/', (req, res) => {
  res.json(warehouseData);
})

module.exports = router;
