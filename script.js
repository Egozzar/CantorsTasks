"use strict";

let table = document.getElementById('grid');
let trBody = table.querySelectorAll('tbody>tr');
let trBodyArr = Array.from(trBody);

document.addEventListener('click', (event) => {
	let tar = event.target.closest('[data-type]');
	if (!tar) return;

	if (tar.dataset.type == 'string') {
		trBodyArr.sort( (a, b) => {
			return a.lastElementChild.innerHTML > b.lastElementChild.innerHTML ? 1 : -1;
		});
	} else {
		trBodyArr.sort( (a, b) => {
			return a.firstElementChild.innerHTML - b.firstElementChild.innerHTML;
		});
	}

		table.tBodies[0].append(...trBodyArr);
});