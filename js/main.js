document.addEventListener('DOMContentLoaded', () => {
	const sliderContainer = document.querySelector('.slider-container'),
		swiperContainer = document.querySelector('.swiper-container'),
		burger = document.querySelector('.burger'),
		menu = document.querySelector('.menu'),
		close = document.querySelector('.menu__close'),
		playButtonsFirst = document.querySelectorAll('.main-slider__play');


	let firstSwiper = new Swiper(swiperContainer, {
		centeredSlides: true,
		slidesPerView: 1,
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.btn-right',
			prevEl: '.btn-left'
		}
	});


	const swiper = new Swiper(sliderContainer, {
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 105
	});



	firstSwiper.on('transitionEnd', function () {
		let videos = document.querySelectorAll('.first__slider video');
		videos.forEach((video) => {
			video.pause();
			video.currentTime = 0;
		});
		playButtonsFirst.forEach((play) => {
			play.style.display = 'block';
		})
	})

	burger.addEventListener('click', () => {
		menu.classList.add('menu--visible');
	})

	close.addEventListener('click', () => {
		menu.classList.remove('menu--visible');
	})

	playButtonsFirst.forEach((play) => {
		play.addEventListener('click', (e) => {
			let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
			video.play();
			e.currentTarget.style.display = 'none'
			setTimeout(() => {
				video.volume = 0.5;
			}, 1000)
		})
	})




})

