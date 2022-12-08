const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// ATTENTION: Mongoose 7 will bring strictQuery back to "false" when the update is released. 
// You have the option of either suppressing the warning by using the following line code.
// You also have the option of preparing for Mongoose 7 launch by setting the default value to "false"
// In this instance, I have decided to suppress the warning, but I will include the code to set the value to "false" right below:
// mongoose.set('strictQuery', false)
mongoose.set('strictQuery', true);


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
