// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// const pageNavScroll = () => {
// 	window.addEventListener("scroll", (() => {
// 		let scrollDistance = window.scrollY;
// 		const sections = document.querySelectorAll("[data-nav-block]");
// 		const navLinks = document.querySelectorAll("[data-nav-links] a");
// 		sections.forEach(((section, i) => {
// 			if (section.offsetTop - document.querySelector("header").clientHeight <= scrollDistance) {
// 				navLinks.forEach((link => {
// 					if (link.classList.contains("_hover-link")) link.classList.remove("_hover-link");
// 				}));
// 				navLinks[i].classList.add("_hover-link");
// 			}
// 		}));
// 	}));
// };
// if (document.querySelector("[data-nav-page]")) pageNavScroll();