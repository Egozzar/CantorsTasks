"use strict";

let container = document.getElementById('container');

container.addEventListener('click', function(event) {
	let tar = event.target.closest('.remove-button');

	if (!tar) return;

	tar.parentElement.hidden = true;
});

