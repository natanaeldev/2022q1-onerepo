if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const warehouseRoutes = require('./routes/warehouses');
const inventoryRoutes = require('./routes/inventories');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/warehouses', warehouseRoutes);
app.use('/api/v1/inventories', inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
