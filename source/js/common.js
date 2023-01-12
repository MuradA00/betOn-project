const header = document.querySelector('.header'),
      sidebar = document.querySelector('.sidebar'),
      content = document.querySelector('.grid-wrapper__inner');

function setHeadersPosition() {
  const sidebarWidth = sidebar.clientWidth;
  const headerHeight = header.clientHeight;
  content.style.marginTop = `${headerHeight}px`;
  header.style.width = `calc(100% - ${sidebarWidth}px)`;
}


setHeadersPosition();
