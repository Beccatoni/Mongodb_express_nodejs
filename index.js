require('dotenv').config();

const express = require('express');
const allRoutes = require('./routes/product.routes');
const { connectDatabase } = require('./db/dbConnection');

const app = express();

app.use(express.json());

// Use the router for the '/api' path
app.use('/api', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
});
