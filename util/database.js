const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'exp',
    password:'1qaz2wsx3edc'
});

module.exports = pool.promise();