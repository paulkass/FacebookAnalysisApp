var express = require('express');
var fs = require('fs');
var app = express();
app.set('port', (process.env.PORT || 80));
app.get('/', function(req, res) {
    res.send(fs.readFile("./main_page.html"), function(err) {
	if (err) {
	  console.log(err);
	}
	console.log(data);
	});
});
app.listen(app.get('port'));
