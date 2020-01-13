const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'foo',
  password: 'bar',
  database: 'test_database'
})

const actors = (name, cb) => {
    const query = `
    SELECT title, full_name, year
    FROM actors LEFT JOIN awards ON actors.id = winner_id
    WHERE full_name LIKE '%${name}%'
    ORDER BY year DESC
    `
    console.log(query)

    connection.query(query, cb)
}

// const actorsSafe = (name) => {
//   const query = `
//   SELECT title, full_name, year
//   FROM actors LEFT JOIN awards ON actors.id = winner_id
//   WHERE full_name LIKE '%?%'
//   ORDER BY year DESC
//   `
//   return  connection.execute(query, [name])
// }

module.exports = {
  actors
}