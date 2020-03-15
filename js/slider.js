"use strict";

// Récupération de la liste de photos
var photoList = $('.slider-album img');


// Afficher une photo dans le SLIDER
// prend un élément html <img> en paramètre
function displayPicture(photo) {
  $('.slider img').attr('src', photo.getAttribute('src'));
  $('.slider img').attr('alt', photo.getAttribute('alt'));
  $('.slider img').attr('data-id', photo.getAttribute('data-id'));
}

// Remplacer l'image du slider
// prend l'ID de la balise data-id de l'image en paramètre
function displayNewPicture(id) {
  var photoToDisplay = $('.slider-album img[data-id="' + id + '"]')  // la photo qu'on doit afficher
  $('.slider img').fadeOut(200, function() {
    displayPicture(photoToDisplay[0]);
  });
  $('.slider img').fadeIn();
}

// Fonction évènement : "click sur une photo de l'album"
function onImgClicked() {
  displayPicture(this);
  $('.slider').fadeIn();
}

// Fonction évènement : "click sur fermer le slider"
function onCloseClicked() {
  $('.slider').fadeOut();
}

// Fonction évènement : "click sur suivant du slider"
function onRightClicked() {
  var id = parseInt(this.attr('data-id'))
  if (id == parseInt(photoList.length) - 1) {
    id = 0;
  } else {
    id++;
  }
  displayNewPicture(id)
}

// Fonction évènement : "click sur précédent du slider"
function onLeftClicked() {
  var id = parseInt(this.attr('data-id'))
  if (id == 0) {
    id = parseInt(photoList.length) - 1;
  } else {
    id--;
  }
  displayNewPicture(id)
}


// CODE PRINCIPAL
$(function() {  // exécuté lorsque l'arbre html est chargé

  // Ajouter un attribut data-id à la photo
  for (var i = 0; i < photoList.length; i++) {
    (photoList[i]).setAttribute("data-id", i);
  }

  // Gestionnaires d'évennements
  photoList.on('click', onImgClicked);
  $('.slider .fa-window-close').on('click', onCloseClicked);
  $('.slider .fa-chevron-circle-right').on('click', onRightClicked.bind($('.slider img')));
  $('.slider .fa-chevron-circle-left').on('click', onLeftClicked.bind($('.slider img')));

});




