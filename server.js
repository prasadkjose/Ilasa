const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'ILASA- Intelligent Logistics Allocation System Application',

  });
});



app.listen(port, () => {
  console.log('Server is up on port' + port);
});
