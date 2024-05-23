
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

import "../../scss/base/swiper.scss";


// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.testimonials__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.testimonials__slider', {
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 2.76,
			spaceBetween: 40,
			speed: 800,
			loopAdditionalSlides: 2,
			loop: true,
			centeredSlides: true,


			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.navigation__button_prev',
				nextEl: '.navigation__button_next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				479.98: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},

				991.98: {
					slidesPerView: 2.76,
					spaceBetween: 40,
				},

			},

			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});