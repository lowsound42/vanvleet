const express = require("express");
const router = express.Router();
const inventoryData = require('../data/inventory.json');
var nanoid = require('nanoid')

//express middleware config

router.get('/', (req, res) => {
  res.json(inventoryData);
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  var product = inventoryData.filter(item => item.id === req.params.id)
  res.json(product);
})

router.post('/', (req, res) => {
  console.log(req.body);
  if ((req.body.name)===undefined || (req.body.lastOrdered)===undefined || (req.body.quantity) === undefined || (req.body.location) === undefined){
    res.status(400);
    res.send('try again bro');
  } else {
    res.status(201);
    // var object = {
    // id: nanoid(),
    // name: req.body.name,
    // description: req.body.description,
    // quantity: req.body.quantity,
    // lastOrdered: req.body.lastOrdered,
    // location: req.body.location,
    // isInstock: false,
    // "categories": "Crafts, Office supplies, Paper",
    // "warehouseId": "W0"

    // }
    inventoryData.push(req.body);
    res.json(inventoryData)
  }
})

router.delete('/:id', (req,res) => {
  console.log(req.params.id);
  var product = inventoryData.filter(item => item.id != req.params.id)
  res.json(product);
})

module.exports = router;
