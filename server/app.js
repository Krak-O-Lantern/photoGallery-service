// /* eslint-disable no-console */
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const compression = require('compression');
// const Image = require('../database/image.js');

// const app = express();

// app.use(compression());
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/../public')));

// app.get('/api/images/:listing_id', (req, res) => {
//   const id = req.params.listing_id;
//   Image.findOne({ listing_id: id })
//     .then((data) => {
//       res.setHeader('Cache-Control', 'max-age=300');
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

// module.exports = app;
