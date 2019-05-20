'use strict';

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
