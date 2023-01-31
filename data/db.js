const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'exercises',
    user: 'myusername',
    password: 'mypassword'
});

module.exports = pool;