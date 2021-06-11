"use strict";

let house = document.getElementById('house');
house.style.position = 'relative';
let overhang = null;

house.addEventListener('mouseout', (event) => {
	if (!overhang) return;

	let newPlace = event.relatedTarget;

	while (newPlace) {
		if (newPlace == overhang) return;
		newPlace = newPlace.parentNode;
	}

	overhang.remove();
	overhang = null;
});

house.addEventListener('mouseover', (event) => {
	let tar = event.target.closest('[data-tooltip]');
	if (!tar) return;

	overhang = document.createElement('div');
	overhang.classList.add('tooltip');
	overhang.innerHTML = tar.dataset.tooltip;
	document.body.append(overhang);

	positioning(overhang, tar);
});

function positioning(elem, anchor) {
	let coordAnchor = anchor.getBoundingClientRect();
	let left = coordAnchor.left + coordAnchor.width / 2 - elem.offsetWidth / 2;
	if (left < 0) left = 0;

	let top = coordAnchor.top - elem.offsetHeight - 10;
	if (top < 0) {
		top = coordAnchor.bottom + 10;
	}

	elem.style.left = left + 'px';
	elem.style.top = top + 'px';
}
