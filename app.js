var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var logs = "Messages";
var messages = [
    {
    date: "pusty",
    title: "test",
    text: "zestaw"}
               ];
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get('/', function(req, res, next) {
 res.render(
 'index',
 {msg: 'Write to me!'}
 );
  next();
});
  app.get('/admin', function(req, res, next) {
 res.render(
 'admin',
     { logs: logs,
       messages: messages
     }
 );
  next();
});
app.post('/', function (req, res, next) {
    console.log(req.body);
    console.log(req.body.title);
 var formatted = { date: Date(),
                   title: req.body.title, 
                   text: req.body.description 
                 };
    messages.push(formatted);
 res.render(
 'index',
 {msg: 'Thank you!'}
 );
});

http
 .createServer(app)
 .listen(
 app.get('port'),
 function(){
 console.log(
 'Express.js server listening on port ' +
 app.get('port')
 );
 }
 );
