/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('../database/databaseArango.js');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use('/listings/:id', express.static(path.join(__dirname, '/../public')));

app.get('/api/images/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  db.query(`FOR i IN images FILTER i.listing_id == ${id} RETURN i`)
    .then(({ _result }) => res.send(_result[0]))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
