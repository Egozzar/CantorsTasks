"use strict";

let arrow = document.getElementById('arrowTop');
arrow.hidden = true;

window.addEventListener('scroll', () => {
	let displayHight = document.documentElement.clientHeight;
	arrow.hidden = pageYOffset < displayHight;
});

arrow.addEventListener('click', () => {
	document.documentElement.scrollTop = 0;
});