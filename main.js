//DOM MANIPULATION
// ABRIR E FECHAR MENU
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// clicar nos links e fechar o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}
// Menu adicionando sombra ao dar scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

const changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
};

// Slider Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

//SCROLL REVEAL MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 500,
  reset: true
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand ,#footer .social
  `,
  { interval: 100 }
);

// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top');

const backToTop = () => {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
};

// Menu ativo conforme seção na página
const sections = document.querySelectorAll('main section[id]');
const activateMenuAtCurrentSection = () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
};

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
