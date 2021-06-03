"use strict";

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
	let anCoords = anchor.getBoundingClientRect();
	switch (position) {
		case 'top':
			elem.style.top = anCoords.top - elem.offsetHeight + 'px';
			elem.style.left = anCoords.left + 'px';
			break;
		case 'bottom':
			elem.style.top = anCoords.bottom + 'px';
			elem.style.left = anCoords.left + 'px';
			break;
		case 'right':
			elem.style.top = anCoords.top + 'px';
			elem.style.left = anCoords.right + 'px';
			break;
	}
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
	let note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	setTimeout(positionAt, 1000, anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
