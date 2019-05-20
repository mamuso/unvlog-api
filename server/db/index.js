'use strict';

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

let unvlogdb = {};

unvlogdb.all = async () => {
  const query = await pool.query(`SELECT * FROM posts`, (err, results) => {
    if (err) {
      return Promise.reject(err);
    }
    return results;
  });
};

module.exports = unvlogdb;
