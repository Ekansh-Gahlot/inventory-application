const {Pool} = require('pg');

module.exports = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: "mosaic",
    database: "app",
    password: "1235",
    port: 5432 // The default port
});

