const express = require("express");
const router = express.Router();
const warehouseData = require('../data/locations.json');

//express middleware config

router.get('/', (req, res) => {
  res.json(warehouseData);
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  var warehouse = warehouseData.filter(item => item.id === req.params.id)
  res.json(warehouse);
})

router.post('/', (req, res) => {
  console.log(req.body);
})


module.exports = router;
