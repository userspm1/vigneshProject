const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

const Dbconfig=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
}
 module.exports = Dbconfig;