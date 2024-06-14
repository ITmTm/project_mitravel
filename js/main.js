const swiperContainer = document.querySelector('.slider-container'),
	  burger = document.querySelector('.burger'),
	  menu = document.querySelector('.menu'),
	  close = document.querySelector('.menu__close');

const swiper = new Swiper(swiperContainer, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
})

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
})


