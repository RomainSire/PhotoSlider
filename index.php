<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">

  <!-- Liens vers les CSS -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/slider.css"> <!-- CSS SPÉCIFIQUE AU SLIDER -->
  <link rel="stylesheet" href="css/main.css">

  <title>Slider de photos</title>
</head>
<body>

  <!--  HEADER  -->
  <header class="wrapper">
    <h1>Slider</h1>
  </header>

  <!--  MAIN  -->
  <main>
    <!-- L'appli prends toutes les img enfant de .slider-album pour faire le slider -->
    <section class="slider-album wrapper">
      <?php for ($i=1; $i < 13; $i++): ?>  <!-- Boucle FOR seulement pour l'exemple. Le slider fonctionne sans $i -->
          <img class="wrapped" src="img/<?= $i ?>.jpg" alt="Photo <?= $i ?>">
      <?php endfor; ?>
    </section>
    <!-- Le slider en lui meme, par défaut en display: none -->
    <div class="slider hidden">
      <img src="#" alt="#">
      <i class="fas fa-chevron-circle-left"></i>
      <i class="fas fa-chevron-circle-right"></i>
      <i class="fas fa-window-close"></i>
    </div>
  </main>


  <!-- Chargement de jQuery -->
  <script src="js/jquery-3.3.1.min.js"></script>
  <!-- Chargement du script du slider -->
  <script src="js/slider.js"></script>
</body>
</html>