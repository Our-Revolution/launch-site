var pg = require('pg');
var connectionString = process.env.DATABASE_URL;

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE IF NOT EXISTS subscribers(id SERIAL PRIMARY KEY, email  VARCHAR(255) not null, zip VARCHAR(10))');
var query = client.query('CREATE TABLE IF NOT EXISTS volunteers(id SERIAL PRIMARY KEY, email  VARCHAR(255) not null, firstName VARCHAR(255) not null, lastName VARCHAR(255) not null, zip VARCHAR(10), phone VARCHAR(30) not null)');
query.on('end', function() { client.end(); });
