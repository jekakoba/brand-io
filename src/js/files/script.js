// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


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
				console.log(document.querySelector('header').clientHeight)
			}
		})
	}
	window.addEventListener('scroll', handleScroll)
	handleScroll()
}
document.addEventListener('DOMContentLoaded', pageNavScroll)

