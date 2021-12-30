/*slides*/

new SimpleSlide({
  slide: "infos", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: false, // se o slide deve passar automaticamente
  pauseOnHover: true, // pausa a transição automática
});

new SimpleSlide({
  slide: "projeto", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  pauseOnHover: true, // pausa a transição automática
});

new SimpleSlide({
  slide: "depoimentos", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  pauseOnHover: true, // pausa a transição automática
});

new SimpleSlide({
  slide: "projetos", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: false, // se o slide deve passar automaticamente
  pauseOnHover: true, // pausa a transição automática
});


/*menu hamburger*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
