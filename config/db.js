const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB has succesffully connected.')
    } catch (err) {
        console.error(err.message);
        // This will exit the process with a failure. 
        process.exit(1);
    }
};

module.exports = connectDB;
