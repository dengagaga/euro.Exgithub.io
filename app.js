function strat() {
  const btnclick = document.querySelectorAll('.FAQ-item');
  btnclick.forEach(btn => {
      btn.addEventListener('click', (e) => {
        btn.classList.toggle('active');
        btn.classList.toggle('rot');
      });
  });
  
  // burger menu
  const body = document.querySelector('.body');
  const buttonOpenMenu = document.querySelector(`[data-menu="open"]`);
  const buttonCloseMenu = document.querySelector(`[data-menu="close"]`);
  const navMenu = document.querySelector(`[data-menu="menu"]`);
  
  const openMenu = () => {
    navMenu.classList.add('nav_links--active');
    window.innerWidth < 820 ? body.classList.add('body--lock') : '';
  };
  const closeMenu = () => {
    navMenu.classList.remove('nav_links--active');
    window.innerWidth < 820 ? body.classList.remove('body--lock') : '';
  };
  
  buttonOpenMenu.addEventListener('click', openMenu);
  buttonCloseMenu.addEventListener('click', closeMenu);


  // animation анимация
  const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      //настройка момента старта анимации
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  //функция для корректного получения значения offset
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  //задержка добавления класса active, для загрузки первого экрана
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
};

window.addEventListener('DOMContentLoaded', strat)