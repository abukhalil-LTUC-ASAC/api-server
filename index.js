'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server.js');
const MONGOOSE_URL = process.env.MONGOOSE_URL;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose.connect(MONGOOSE_URL, mongooseOptions);

server.start();
