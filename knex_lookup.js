
const moment = require("moment"); 
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database : settings.database
  }

});

const name = process.argv[2];

  console.log("Searching..");
  

  knex
    .select('first_name', 'last_name', 'birthdate')
    .from('famous_people')
    .where('first_name', name)
    .asCallback((err, rows) => {
    if (err) return console.error(err);
    console.log(rows);
  }).finally( () => {
  knex.destroy();
}); 

// need to extract just the artist and the date they were born 