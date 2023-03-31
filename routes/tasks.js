const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task_controller');
const passport = require('passport');



router.post('/create',taskController.create)
router.post('/update/:id',taskController.update)
router.get('/destroy/:id',taskController.destroy)




module.exports = router;