var express = require('express');
var app = express();

// Define response variable
var response;

// Root route handler (only one '/' route)
app.get('/', function (req, res) {
    response = 'This is version 3 of the app.' + '\n';
    res.send(response);
});

// Mars route handler
app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
});

// Start the server
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});