const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/taskmanager_db')
mongoose.connect(<mongo db connection link here>);
//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the databasef");
});
