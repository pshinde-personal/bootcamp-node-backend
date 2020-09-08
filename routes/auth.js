const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const router = express();

//  routes
router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;