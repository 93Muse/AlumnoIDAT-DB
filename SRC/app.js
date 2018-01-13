const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');


//CONFIGURACIONES
app.set('port', process.env.PORT || 3000 );

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//RUTAS DEL SERVIDOR
require('./ROUTES/tareaRoute')(app);
//

app.listen(app.get('port'),"0.0.0.0");


/*var http = require('http');
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n'); }).listen(3000, "0.0.0.0");
console.log('Server running at http://0.0.0.0:8080/');*/
