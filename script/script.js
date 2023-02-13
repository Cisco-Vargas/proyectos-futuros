setTimeout(function () {
  document.querySelector(".posicionar").classList.add("ocultar");
}, 2000);

const titulo = document.querySelector('#Titulo_principal');
titulo.classList.add('animate__fadeInRight');

$(document).ready(function() {
  var navbar = $(".navbar");
  $(window).scroll(function() {
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass("fixed-top");
    } else {
      navbar.removeClass("fixed-top");
    }
  });
});
