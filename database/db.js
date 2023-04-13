const connection = require("mysql2/promise");
require("dotenv").config();

const pool = connection.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE
})

module.exports = {
    pool
};