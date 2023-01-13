const header = document.querySelector('.header'),
      sidebar = document.querySelector('.sidebar'),
      footer = document.querySelector('.footer'),
      content = document.querySelector('.grid-wrapper__inner'),
      tabletMedia = window.matchMedia('(max-width: 650px)');

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

setHeadersPosition();
