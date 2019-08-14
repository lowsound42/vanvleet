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


router.post('/', (req, res) => {
  console.log(req.body);
  if ((req.body.name)===undefined || (req.body.inventoryCategories)===undefined || (req.body.id) === undefined){
    res.status(400);
    res.send('try again bro');
  } else {
    res.status(201);
    warehouseData.push(req.body);
    res.json(warehouseData)
  }
})



module.exports = router;
