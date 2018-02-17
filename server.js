var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


require(path.join(__dirname, './app/routing/apiroutes'))(app);
require(path.join(__dirname, './app/routing/htmlroutes'))(app);

app.listen(PORT, function() {
  console.log("Friend Finder listening on PORT " + PORT);
});