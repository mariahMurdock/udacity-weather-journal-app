// Set up empty JS object to act as endpoint for all routes

let projectData = {
  "name": "Fuck, this is bullshit"
};

// Node and Express Enviorments:

// Require Express
const express = require('express');
// Create Instance of App using Express
const app = express();

// Project Dependencies:

// Require cors
const cors = require('cors');
// Cors for cross origin allowance
app.use(cors());
// Require body-parser
const bodyParser = require('body-parser');
global.fetch = require('node-fetch');

// Middleware:

// configure Express to use body-parser as Middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize main project folder
app.use(express.static('website'));


// Setup Server

const port = 9000;

const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log('running on local host: {$port}');
}

// GET Route
app.get('/retrieve', getData);

function getData(request, response) {
    response.send(projectData);
}

// POST Route
app.post('/add', postData);

function postData(request, response) {
    projectData = request.body;
    response.send({ message: "Post received" })
    console.log(projectData)
}
