const express = require("express");
const cors = require('cors');
const router = express.Router();
const warehouseRoutes = require('./routes/warehouseRoutes');
const inventoryRoute = require('./routes/inventoryRoute');

const app = express();

//express middleware config
app.use(express.json());
app.use(cors());

router.use('/', warehouseRoutes)
router.use('/', inventoryRoute)


app.listen(8080, () => console.log("Server is doing a thing..."));