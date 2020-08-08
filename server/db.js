const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"root",
    port:5432,
    database:"newtravelblog"
});

module.exports = pool;
