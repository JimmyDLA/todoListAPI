const express = require('express');
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true } )
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("DB connect");
});


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes = require('./api/routes/todoListRoutes');
// var routes = require('./api/routes/todoListRoutes'); //importing route

routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
