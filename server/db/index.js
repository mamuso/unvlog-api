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

unvlogdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM posts`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

unvlogdb.one = id => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM posts WHERE id = ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = unvlogdb;
