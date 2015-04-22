var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('The Right Thing!');
});
app.listen(3000);
