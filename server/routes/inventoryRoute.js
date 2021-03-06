const express = require("express");
const router = express.Router();
let inventoryData = require('../data/inventory.json');
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
    var object = {
    id: nanoid(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    lastOrdered: req.body.lastOrdered,
    location: req.body.location,
    isInstock: req.body.isInstock,
    }
    inventoryData.push(object);
    res.json(inventoryData)
  }
})

router.delete('/:id', (req,res) => {
  console.log(req.params.id);
  inventoryData = inventoryData.filter(item => item.id != req.params.id)
  res.json(inventoryData);
})

module.exports = router;
