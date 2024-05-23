// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function showExperience() {
	document.addEventListener("click", function (e) {
		const target = e.target
		if (target.closest('[data-experience-open]')) {
			const dropdownElement = target.closest('[data-experience]');
			experienceOpen(dropdownElement)
		} else if (!target.closest('[data-experience]')) {
			const dropdownEl = document.querySelector('._show-experience');
			if (!dropdownEl) return
			experienceClose(dropdownEl)
		}
	});
	function experienceOpen(dropdownEl) {
		dropdownEl.classList.toggle('_show-experience')
	}
	function experienceClose(dropdownEl) {
		dropdownEl.classList.remove('_show-experience')
	}
}
showExperience()