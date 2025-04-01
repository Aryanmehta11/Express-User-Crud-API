const User = require('../models/User'); // Import the Mongoose User model

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Find user by ID
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        // Check if email already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).send('User already exists');

        // Create a new user in MongoDB
        user = new User({ name, email });
        await user.save(); // Save the user to MongoDB

        res.status(201).json(user); // Return the created user
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");

        // Update user details
        user.name = name || user.name;
        user.email = email || user.email;

        await user.save(); // Save the updated user

        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id); // Delete user by ID
        if (!user) return res.status(404).send("User not found");

        res.status(200).json({ message: 'User deleted successfully' }); // Respond with no content
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
