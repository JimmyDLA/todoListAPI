const express = require('express');
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const config = process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

mongoose.connect('mongodb://localhost:3000/Tododb', { useNewUrlParser: true } )
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("DB connect");
    
});


// app.use(parser.urlencoded());
// app.use(parser.json());

// let routes = require('./api/routes/todoListRoutes');
// routes(app);
// app.use('./api/mo' );

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
