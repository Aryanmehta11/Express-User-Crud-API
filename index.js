// index.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000
const cors = require('cors'); // Import CORS middleware
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use(express.json());

app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
