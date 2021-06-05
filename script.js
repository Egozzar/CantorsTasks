"use strict";

let panes = document.querySelectorAll('.pane');

panes.forEach( elem => {
	let button = document.createElement('button');
	button.innerHTML = '[x]';
	button.className = 'remove-button'
	button.style.float = 'right';
	elem.firstElementChild.append(button);

	button.onclick = () => elem.hidden = true;
});

