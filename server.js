const express = require('express');
const { popular } = require('ig/media');
const connectDB = require('./config/db');

const app = express();

// This command will call the database after initializing the server
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API is running at this time.'));

// Defining routes here

app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`Server initialized successfully! You are currently using port ${PORT}.`));
