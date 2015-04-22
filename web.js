var express = require('express');
var fs = require('fs');
var app = express();
app.set('port', (process.env.PORT || 80));
console.log(fs.readFile("./main_page.html"));
app.get('/', function(req, res) {
    res.send(fs.readFile("./main_page.html"));
});
app.listen(app.get('port'));
