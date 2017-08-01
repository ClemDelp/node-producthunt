const express = require('express');
const productHuntAPI = require('./index.js');

const productHunt = new productHuntAPI({
  client_id: 'bc4673d5c32b16570b6658e88d619304384a0ef22d27947100e80f3645edc320',
  client_secret: '8f5a990373e8fa4c6a45b8e7b75fd29560e6ed922f1f4cf2bb5fdc9911ad132e',
  grant_type: 'client_credentials'
})

const app = express()
var bodyParser = require('body-parser')
const port = 3001
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Be cool...')
})

app.get('/categories', (req, res) => {
  // List all live events and filter by category
  productHunt.categories.index((v, response) => {
    res.type('application/json')
    res.send({data: JSON.parse(response.body)})
  })
})

app.get('/topics', (req, res) => {
  // List all live events and filter by category
  productHunt.topics.index((v, response) => {
    res.type('application/json')
    res.send({data: JSON.parse(response.body)})
  })
})

app.get('/collections', (req, res) => {
  // List all live events and filter by category
  productHunt.collections.index((v, response) => {
    res.type('application/json')
    res.send({data: JSON.parse(response.body)})
  })
})

app.get('/posts', (req, res) => {
  // List all live events and filter by category
  productHunt.posts.index((v, response) => {
    res.type('application/json')
    res.send({data: JSON.parse(response.body)})
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
