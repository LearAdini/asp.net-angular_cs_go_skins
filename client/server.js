const express = require('express');
const path = require('path');
const app = express();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/client'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/client/index.html'));});
app.listen(process.env.PORT || 8080);



// const express = require('express');
// const Datastore = require('sqlite3');
// const path = require('path');
// const app = express();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//   next();
// });
// app.listen(process.env.PORT || 8080);

// app.use(express.static(__dirname + '/dist/client'));
// // app.use(express.json({limit: '50mb'}));

// const database = new Datastore ('/dist/API/dropshipping.db')
// database.loadDatabase();
// app.get('/api', function(req,res) {
//   database.find({}, function(err, docs) {
//     if(err){ response.end();
//     return;
//     }
//     response.json(data);
//   });

// res.sendFile(path.join(__dirname+
// '/dist/client/index.html'));
// });

