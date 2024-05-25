// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// document.addEventListener('DOMContentLoaded', function () {
// 	const links = document.querySelectorAll('nav a');
// 	const sections = document.querySelectorAll('section');

// 	// Intersection Observer для відстеження видимих секцій
// 	const observerOptions = {
// 		root: null,
// 		rootMargin: '0px',
// 		threshold: 0.5 // половина секції повинна бути видимою
// 	};

// 	const observer = new IntersectionObserver((entries, observer) => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting) {
// 				// Видалення класу active з усіх посилань
// 				links.forEach(link => link.classList.remove('active'));

// 				// Додавання класу active до відповідного посилання
// 				const id = entry.target.getAttribute('id');
// 				const activeLink = document.querySelector(`nav a[href="#${id}"]`);
// 				activeLink.classList.add('active');
// 			}
// 		});
// 	}, observerOptions);

// 	sections.forEach(section => {
// 		observer.observe(section);
// 	});

// 	// Обробник для плавної прокрутки
// 	links.forEach(link => {
// 		link.addEventListener('click', function (event) {
// 			event.preventDefault();
// 			const targetId = this.getAttribute('href').substring(1);
// 			const targetElement = document.getElementById(targetId);

// 			window.scrollTo({
// 				top: targetElement.offsetTop,
// 				behavior: 'smooth'
// 			});
// 		});
// 	});
// });










const pageNavScroll = () => {
	function handleScroll() {
		let scrollDistance = window.scrollY
		const sections = document.querySelectorAll('[data-nav-block]')
		const navLinks = document.querySelectorAll('[data-nav-links] a')
		if (!sections && !navLinks) return
		sections.forEach((section, i) => {
			if ((section.offsetTop - (document.querySelector('header').clientHeight) - 30) <= (scrollDistance)) {
				navLinks.forEach(link => {
					if (link.classList.contains('_active-link')) {
						link.classList.remove('_active-link')
					}
				})
				navLinks[i].classList.add('_active-link')
			}
		})
	}
	window.addEventListener('scroll', handleScroll)
	handleScroll()
}
document.addEventListener('DOMContentLoaded', pageNavScroll)


function showHideHeader() {
	const header = document.getElementsByTagName('header');
	if (!header) return;
	let lastScrollTop = 0;

	window.addEventListener('scroll', function () {
		let scrollTop = window.scrollY || document.documentElement.scrollTop;
		// Перевірка чи прокрутка більше ХХХ пікселів
		if (scrollTop > 1) {
			document.documentElement.classList.add('scrolled-page');
			if (scrollTop > lastScrollTop) {
				// Scroll down
				document.documentElement.classList.add('scrolled-down');
			} else {
				// Scroll up
				document.documentElement.classList.remove('scrolled-down');
			}
		} else {
			document.documentElement.classList.remove('scrolled-page');
		}

		lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
	});
}
showHideHeader()
