// index.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://am499702:ih5g4KhVw4zPYekk@crud.hxdlq0z.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use(express.json());

app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
