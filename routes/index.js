const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');




// setv routes
router.get('/',homeController.home);
router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));


module.exports = router; 