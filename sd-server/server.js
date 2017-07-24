const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:1234@ds151909.mlab.com:51909/pf-doctor');

const indexRouter = require('./routes/index');
const restRouter = require('./routes/rest');
const path = require('path');
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})