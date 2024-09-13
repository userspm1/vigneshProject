const User = require('../Models/userModel');
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const multer = require('multer')
const mongoose = require('mongoose');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Register User
exports.register = async (req, res) => {
  try {
    const { username, email, contactNo, address, gender, password } = req.body;
    const user = new User({ username, password, address, gender, email, contactNo });
    await user.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const password1 = user.password
    if (!user || password !== password1) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const role = user.role
    const username = user.email
    res.json({ message: 'successfully', role, username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getUser = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getUserbynumber = async (req, res) => {
  const { contactNo } = req.params;
  console.log(contactNo)
  try {
    const user = await User.findOne({ contactNo });
    console.log(user)
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = { ...req.body };
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  try {
    res.json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addProducts = async (req, res) => {
  try {
    const { email } = req.params
    const { id } = req.body
    const user = await User.findOne({ email });
    // console.log(user)

    if (user) {
      user.addproducts.push(id)
      await user.save()
      return res.json({ message: 'product added' });
    }
    else {
      return res.status(400).json({ message: 'user not found' });

    }

  } catch (error) {
    console.log(error)
  }
}