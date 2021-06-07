"use strict";

let tooltip;

document.addEventListener('mouseover', (event) => {
	let tar = event.target.closest('[data-tooltip]');
	if (!tar) return;

	tooltip = document.createElement('div');
	tooltip.className = 'tooltip';
	tooltip.innerHTML = tar.dataset.tooltip;
	document.body.append(tooltip);

	positioning(tooltip, tar);
});

document.addEventListener('mouseout', () => {
	if (tooltip) {
		tooltip.remove();
		tooltip = null;
	}
});

function positioning(elem, anchor) {
	let coordAnchor = anchor.getBoundingClientRect();

	let left = coordAnchor.left + coordAnchor.width / 2 - elem.offsetWidth / 2;
	if (left < 0) left = 0;

	let top = coordAnchor.top - elem.offsetHeight - 5;
	if (top < 0) top = coordAnchor.bottom + 5;

	elem.style.left = left + 'px';
	elem.style.top = top + 'px';
}