// routes/userRoutes.js
const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser,restoreUser } = require('../controllers/userController');
const router = express.Router();

// Define the routes
router.get('/', getUsers);               // Get all users
router.get('/:id', getUserById);         // Get user by ID
router.post('/', createUser);            // Create new user
router.put('/:id', updateUser);         // Update user by ID
router.delete('/:id', deleteUser);      // Delete user by ID
router.patch('/restore/:id', restoreUser);  // Restore user by ID

module.exports = router;
