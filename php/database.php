<?php

class Database {

  const DSN = "mysql:host=127.0.0.1;dbname=test_database";
  const USERNAME = "root";
  const PASSWORD = "root";

  private $pdo;

  function __construct() {    
    $this->connect();
  }

  private function connect() {
    $this->pdo = new PDO(self::DSN, self::USERNAME, self::PASSWORD);
    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }


  public function actors($name) {
    $sql = "
    SELECT title, full_name, year
    FROM actors LEFT JOIN awards ON actors.id = winner_id
    WHERE full_name LIKE '%$name%'
    ORDER BY year DESC
    ";
    $statement = $this->pdo->prepare($sql);
    $statement->execute();
    return $statement->fetchAll();
  }

  public function actorsSafe($name) {
    $sql = "
    SELECT title, full_name, year
    FROM actors LEFT JOIN awards ON actors.id = winner_id
    WHERE full_name LIKE '%?%'
    ORDER BY year DESC
    ";
    echo "<script>console.log(`$sql`)</script>";
    $statement = $this->pdo->prepare($sql);
    $params = [$name];
    $statement->execute($params);
    return $statement->fetchAll();
  }

}