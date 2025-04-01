// controllers/userController.js
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

// Get all users
exports.getUsers = (req, res) => {
    res.json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
};

// Create new user
exports.createUser = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user by ID
exports.updateUser = (req, res) => {
    const { name } = req.body;
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");

    user.name = name;
    res.json(user);
};

// Delete user by ID
exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("User not found");

    users.splice(userIndex, 1);
    res.status(204).send("User deleted successfully");
};
