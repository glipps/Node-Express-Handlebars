var express = require('express');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
// var path = require('path')
var app = express();

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server listening at: http://localhost:" + PORT);
});

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// app.use(methodOverride('_method'))

app.engine('hbs', exphbs({
    defaultLayout: 'main'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var routes = require('./controllers/pizza_controllers.js');
app.use('/', routes);


