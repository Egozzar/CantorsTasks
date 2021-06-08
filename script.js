"use strict";

let largeImg = document.getElementById('largeImg');

document.addEventListener('click', (event) => {
	let tar = event.target.closest('#thumbs a');
	if (!tar) return;

	event.preventDefault();
	largeImg.src = tar.href;
	largeImg.alt = tar.title;
});