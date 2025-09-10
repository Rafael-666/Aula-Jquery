$(document).ready(function () {
  $('.pergunta').click(function () {
    let elpergunta = $(this);
    let elresposta = elpergunta.next('.resposta');

    $('.resposta').not(elresposta).slideUp(200);

    elresposta.slideToggle();

    $('.pergunta').not(elpergunta)
      .removeClass('ativa')
      .find('.icone')
      .html("+");

    elpergunta.toggleClass('ativa');

    let icone = elpergunta.find('.icone');

    if (elpergunta.hasClass('ativa')) {
      icone.html("-");
    } else {
      icone.html("+");
    }
  });

  $('#busca-faq').on('keyup', function () {
    let termoBusca = $(this).val().toLowerCase();

    $('.faq-item').each(function () {
      let textoItem = $(this).text().toLowerCase();
      
      if (textoItem.includes(termoBusca)) {
        $(this).show();

      } else {
        $(this).hide();
      }

    })


  });

});

