/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const compression = require('compression');
const db = require('../database/databaseArango.js');
const redis = require('redis');
const { password } = require('../database/config.js');


const app = express();
const redusURI = '//44.236.111.84:6379';
const client = redis.createClient(redusURI, { password: password });

// echo redis errors to the console
client.on('error', (err) => {
  console.log(`Error ${err}`);
});

// app.use(compression());
// app.use(bodyParser.json());
app.use('/listings/:id', express.static(path.join(__dirname, '/../public')));

app.get('/api/images/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  client.get(id, (err, data) => {
    if (data) {
      res.send(data);
    } else {
      db.query(`FOR i IN images FILTER i.listing_id == ${id} RETURN i`)
        .then(({ _result }) => {
          client.setex(id, 3600, JSON.stringify(_result[0]));
          res.send(_result[0]);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
