var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

var massive = require('massive');
var config = require('./config.js');
var connectionString = "postgres://postgres:" + config.password +"@localhost/ShoeProject";


app.use(session({
	secret: config.sessionSecret,
	saveUninitialized: false,
	resave: false
}));


var  massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);
var controller = require('./shoeCtrl');
// var db = app.get('sql');

//console.log('this is db', db);






var corsOptions = {
    origin: 'http://localhost:9000'
};
app.use(cors(corsOptions));






//app.post('/api/shoes', controller.create);
app.get('/api/shoes', controller.getAll)
//app.get('/api/shoes/:shoeId', controller.getOne);
//app.put('/api/shoes/:shoeId/desc', controller.update);
//app.delete('/api/shoe/:shoesId', controller.delete);






var port = 9000;
app.listen(port, function(){
  console.log("Successfully listening on", port)
})
	console.log('server controller');