"use strict";

let ul = document.getElementById('ul');
let lis = ul.querySelectorAll('li');
let pressed;

ul.addEventListener('mousedown', (event) => {
	event.preventDefault();
});

ul.addEventListener('click', (event) => {
	let tar = event.target.closest('li');
	if (!tar) return;

	let ctrl = event.ctrlKey || event.metaKey;
	if (pressed && !ctrl) {
		lis.forEach(li => li.classList.remove('selected'));
	}

	pressed = tar;
	pressed.classList.toggle('selected');
});