const express = require('express');
const productHuntAPI = require('./index.js');

const productHunt = new productHuntAPI({
  client_id: 'bc4673d5c32b16570b6658e88d619304384a0ef22d27947100e80f3645edc320',
  client_secret: '8f5a990373e8fa4c6a45b8e7b75fd29560e6ed922f1f4cf2bb5fdc9911ad132e',
  grant_type: 'client_credentials'
});

const app = express();
var bodyParser = require('body-parser');

const port = 3000;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  // List all live events and filter by category
  productHunt.topics.index((test, response) => {
    console.log('data ->', response.body)
    res.type('application/json');
    res.send({data: JSON.parse(response.body)})
  });

});

app.get('/categories', (request, response) => {
  response.send('Hello from Express!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
