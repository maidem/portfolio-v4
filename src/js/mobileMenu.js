export function initMobileMenu() {
  const menuLink = document.querySelector('.header__menu-link');
  const menu = document.querySelector('.header__menu');

  if (menuLink && menu) {
    menuLink.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = menu.classList.toggle('header__menu--open');
      menuLink.textContent = isOpen ? 'schließen' : 'menü';
    });

    // Optional: Menü schließen, wenn außerhalb geklickt wird
    document.addEventListener('click', (e) => {
      if (
        menu.classList.contains('header__menu--open') &&
        !menu.contains(e.target) &&
        e.target !== menuLink
      ) {
        menu.classList.remove('header__menu--open');
        menuLink.textContent = 'Menü';
      }
    });
  }
}
