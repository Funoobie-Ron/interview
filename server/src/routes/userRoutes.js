const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticate, userController.getAllUsers);
router.put('/:id', authMiddleware.authenticate, userController.editUser);

module.exports = router;
