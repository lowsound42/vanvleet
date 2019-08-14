const express = require('express');
const locations = require('../data/locations.json');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(201);
  res.send(locations);
});

module.exports = router;



