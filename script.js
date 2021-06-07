"use strict";

let contents = document.getElementById('contents');

contents.addEventListener('click', (event) => {
	let tar = event.target.closest('a');
	if (!tar) return;

	let href = tar.href;
	if ( !confirm(`Перейти на страницу ${href} ?`) ) event.preventDefault();
})