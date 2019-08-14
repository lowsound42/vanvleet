const express = require("express");
const cors = require('cors');
const warehouseRoutes = require('./routes/warehouseRoutes.js');
const inventoryRoute = require('./routes/inventoryRoute.js');
const app = express();

//express middleware config
app.use(express.json());
app.use(cors());

app.use('/warehouses', warehouseRoutes);


app.listen(8080, () => console.log("Server is doing a thing..."));