'use strict';

const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({ test: 'test' });
});

module.exports = router;
