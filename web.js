var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 80));
app.get('/', function(req, res) {
    res.send('The Right Thing!');
});
app.listen(app.get('port'));
