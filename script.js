"use strict";

let div = document.getElementById('view');
div.tabIndex = -1;

let edit = document.createElement('textarea');
edit.className = 'edit';

div.addEventListener('focus', () => {
	div.replaceWith(edit);
	edit.focus();
});

edit.addEventListener('blur', () => {
	div.innerHTML = edit.value;
	edit.replaceWith(div);
});

edit.addEventListener('keydown', event => {
	if (event.code != 'Enter') return;

	div.innerHTML = edit.value;
	edit.replaceWith(div);
});