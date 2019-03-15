const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');

// var indexRouter = require('./routes/index');
const router = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
http.createServer(app).listen(port);

console.log(`Express app listening on ${port}`);
