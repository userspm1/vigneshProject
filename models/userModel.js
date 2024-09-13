const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['owner', 'customer'],
    default: 'customer'

  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  profileimg_name: {
    type: String,
  },
  profileimg_path: {
    type: String,
  },
  pincode: {
    type: String,
  },
  languages: {
    type: String,
  },
  addproducts: { type: Array, ref: 'id' }
}, {
  timestamps: true,
});



const User = mongoose.model('User', userSchema);
module.exports = User;
