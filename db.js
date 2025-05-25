//Importing the mongoose and defining the mongodb url
const mongoose = require('mongoose');

//Define the mongoDB URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection which will tell the corrent state of the database
db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',()=>{
    console.log('MongoDB connection error', err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports = db;