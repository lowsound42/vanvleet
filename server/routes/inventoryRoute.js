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

router.post('/', (req, res) => {
  if ((req.body.name)===undefined || (req.body.city)===undefined || (req.body.quantity) === undefined){
    res.status(400);
    res.send('try again bro');
  } else {
    res.status(201);
    inventoryData.push(req.body);
    res.json(inventoryData)
  }
})


module.exports = router;
