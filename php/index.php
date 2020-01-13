<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="style.css">

  <title>💩</title>
</head>
<body>

<main>

<form action="index.php" method="GET" autocomplete="off">
  <input type="text" name="name" placeholder="Name">
  <button>Search</button>
</form>

<?php 

if (isset($_GET['name'])) {
  require_once 'database.php'; 

  $name = $_GET['name'];

  $db = new Database();
  $actors = $db->actors($name);

  echo '<ul class="actors">';
  foreach ($actors as $actor) {
    echo '<li><span>'.$actor['full_name'].'</span><span>'.$actor['title'].'</span><span>'.$actor['year'].'</span></li>';
  }
  echo '</ul>';
  
}

?>





</main>

</body>
</html>