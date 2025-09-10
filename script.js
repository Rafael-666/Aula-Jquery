$(document).ready(function () {
  $('.pergunta').click(function () {
    let elpergunta = $(this);
    let elresposta = elpergunta.next('.resposta');
    $('.resposta').not(elresposta).slideUp(200);
    elresposta.slideToggle();

  })



});

