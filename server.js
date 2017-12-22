const express = require('express');
const hbs = require('hbs');
var app = express();
app.set( 'port', ( process.env.PORT || 5000 ));


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'ILASA- Intelligent Logistics Allocation System Application',

  });
});


app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
