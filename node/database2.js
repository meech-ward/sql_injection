const mysql = require('mysql2/promise');
 
module.exports = async function() {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test_database'
  });

  const actors = async (name) => {
    const query = `
    SELECT title, full_name, year
    FROM actors LEFT JOIN awards ON actors.id = winner_id
    WHERE full_name LIKE '%${name}%'
    ORDER BY year DESC
    `
    console.log(query)
    return await connection.execute(query);
  }

 
  const actorsSafe = async (name) => {
    const query = `
    SELECT title, full_name, year
    FROM actors LEFT JOIN awards ON actors.id = winner_id
    WHERE full_name LIKE '%?%'
    ORDER BY year DESC
    `
    return await connection.execute(query, [name]);
  }

  return {
    actors, actorsSafe
  }
}



