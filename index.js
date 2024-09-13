const express = require('express');
const app = express();
const dbConfig = require('./db_config/dbconnect');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes')
const productRouts = require('./routes/adminRoutes')
const orderRoutes = require('./routes/orderRoute')
dbConfig();



app.use(cors());
app.use(express.json());

app.use('/furniture',authRoutes)
app.use('/furniture',productRouts)
app.use('/furniture',orderRoutes)


const port = 8080;

app.listen(port, () => {
    console.log(`Your Server is Runing on ${port}`);
})