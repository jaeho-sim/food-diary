const express = require('express');
const path = require('path');
// const logger = require('morgan');
// var indexRouter = require('./routes/index');
const router = require('./routes');
require('dotenv').config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  var cors = require('cors')
  // var corsOptions = {
  //   origin: 'http://localhost:3000',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // }
  app.use(cors());
}

app.use(express.static(path.join(__dirname, 'client/build')));

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  const fs = require('fs');
  fs.readdirSync('./client/').forEach(file => {
    console.log('client: ', file);
  });
  fs.readdirSync('./client/build/').forEach(file => {
    console.log('build: ', file);
  });
  res.sendFile(path.join(__dirname + './client/build/index.html'));
  // res.sendFile(path.join(__dirname + '/client/build/static/js/main*.js'));
});

module.exports = app;