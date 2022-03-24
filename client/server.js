const express = require('express');
const Datastore = require('sqlite3');
const path = require('path');
const app = express();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//   next();
// });
app.listen(process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/client'));
// app.use(express.json({limit: '50mb'}));

const database = new Datastore ('/dist/API/dropshipping.db')
database.loadDatabase();
app.get('/api', function(req,res) {
  database.find({}, function(err, docs) {
    if(err){ response.end();
    return;
    }
    response.json(data);
  });

  app.post('/api', (request, response) => {
    const data = request.body;
    database.insert(data);
    response.json(data);
  });

res.sendFile(path.join(__dirname+
'/dist/client/index.html'));
});
