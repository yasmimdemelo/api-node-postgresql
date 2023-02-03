const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'PERN',
    user: 'myusername',
    password: 'mypassword'
});

module.exports = pool;