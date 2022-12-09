const express = require('express');
const connectDB = require('./config/db');

const app = express();

// This command will call the database after initializing the server
connectDB();

const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => res.send('API is running at this time 4:26pm December 8th.'));

// Defining routes here
// Following routes correlate to the 4 files with users, profile, authentication and post

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));

app.listen(PORT, () => console.log(`Server initialized successfully! You are currently using port ${PORT}.`));
