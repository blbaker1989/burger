var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burger_controllers.js');
app.use('/', router);

//Server
var port = process.env.PORT || 3000;
app.listen(port);

app.use(function (err, req, res, next) {
res.status(err.status || 500);
res.render('error', {
message: err.message,
error: err
});
});
