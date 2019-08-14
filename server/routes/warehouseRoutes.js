const express = require("express");
const router = express.Router();
const warehouseData = require('../data/locations.json');

//express middleware config

router.get('/', (req, res) => {
  res.json(warehouseData);
})

router.get('/warehouse/:id', (req, res) => {
  console.log(req.params.id);
  var warehouse = warehouseData.filter(item => item.id === req.params.id)
  res.json(warehouse);
})


module.exports = router;
