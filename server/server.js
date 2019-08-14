const express = require("express");
var cors = require('cors')
const inventoryRoute = require('./routes/inventoryRoute.js')
const warehouseRoute = require('./routes/warehouseRoutes.js')


const app = express();

app.use(cors());
app.use(express.json());


app.use('/inventory', inventoryRoute);
app.use('/warehouse', warehouseRoute);

app.listen(8080, () => console.log("Bro, we chillin at port 8080..."));