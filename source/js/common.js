const header = document.querySelector('.header'),
      sidebar = document.querySelector('.sidebar'),
      footer = document.querySelector('.footer'),
      content = document.querySelector('.grid-wrapper__inner'),
      tabletMedia = window.matchMedia('(max-width: 650px)'),
      burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu'),
      closeIcon = document.querySelector('.menu__close'),
      body = document.querySelector('.grid-wrapper__content')

function setHeadersPosition() {
  const sidebarWidth = sidebar.clientWidth;
  const headerHeight = header.clientHeight;

  content.style.marginTop = `${headerHeight}px`;

  if (sidebar) {
    getComputedStyle(sidebar).position === 'fixed' ? header.style.width = '100%' : header.style.width = `calc(100% - ${sidebarWidth}px)`;
  }
  if (tabletMedia.matches && sidebar) {
    const sidebarHeight = sidebar.clientHeight;
    footer.style.marginBottom = `${sidebarHeight}px `
  }
}

function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked');
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked');
}

if (burger) {
  closeIcon.addEventListener('click', closeMenu);
}

if (burger) {
  burger.addEventListener('click', showMenu);
}

setHeadersPosition();
