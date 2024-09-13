const express = require('express');
const { register, login, getUser, updateUser, logout, addProducts, getUserbynumber } = require('../controller/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getuser/:email', getUser);
router.get('/getuserData/:contactNo', getUserbynumber);
router.put('/user/:id', updateUser);
router.post('/logout', logout);
router.post('/addProducts/:email', addProducts);


module.exports = router;
