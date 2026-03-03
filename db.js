// // ========== MongoDb connecting with nodeJS==================================================

// const mongoose = require('mongoose');

// require('dotenv').config();

// // define mongodb connection URL 
// // const mongoURL = 'mongodb://127.0.0.1:27017/databaseName'
// const mongoURL = process.env.MONGO_URL// setup mongodb connection
// mongoose.connect(mongoURL)

// // to access default connection object => 
// // mongodb maintains a default connection object representing mongodb connection 
// const db = mongoose.connection;

// // start listening events => used to listen db is established or not
// // Default events are as follows :- 
// // 1. .on('connected', ...)
// // 2. .on('error', ...)
// // 3. .on('disconnected', ...)

// db.on('connected', ()=>{
//     console.log("Connected to mongoDB server");
    
// });
// db.on('error', ()=>{
//     console.log("error in mongoDB server");
    
// });
// db.on('disconnected', ()=>{
//     console.log("Disconnected to mongoDB server");
    
// });

// // exporting db connection 
// module.exports = db;


const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).catch((err) => {
    console.log('Failed to connect to MongoDB:', err.message);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('Error in MongoDB connection:', err.message);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;