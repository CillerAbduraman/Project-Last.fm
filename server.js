var express = require("express");
var app = express()

var nodeadmin = require("nodeadmin");
var routes = require('./routes/routing')


app.use('/nodeamin', nodeadmin(app))
app.use('/', routes);


app.set('port',process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine','jsx');


app.engine('jsx',require('express-react-views').createEngine());

app.listen(app.get('port'),function (){});

