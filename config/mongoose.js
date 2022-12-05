const mongoose = require('mongoose');


mongoose.connect('mongodb://0.0.0.0:27017/Blog');


const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connectiog to mongodb'));

db.once('open',function(){
    console.log('Caonnected to dataBase:: MongoDB');
})

module.exports = db;