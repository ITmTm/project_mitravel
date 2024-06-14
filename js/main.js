const sliderContainer = document.querySelector('.slider-container'),
	  swiperContainer = document.querySelector('.swiper-container'),
	  burger = document.querySelector('.burger'),
	  menu = document.querySelector('.menu'),
	  close = document.querySelector('.menu__close');

const swiper = new Swiper(sliderContainer, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105
});

const secondSwiper = new Swiper(swiperContainer, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left'
	}
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
})

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
})


