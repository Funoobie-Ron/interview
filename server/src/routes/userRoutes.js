const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/list', authMiddleware.authenticate, userController.getAllUsers);
router.put('/:id', authMiddleware.authenticate, userController.editUser);
router.get('/currentuser', authMiddleware.authenticate, userController.currentUser);

module.exports = router;
