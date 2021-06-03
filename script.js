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
		case 'top-out':
			elem.style.top = anCoords.top + pageYOffset - elem.offsetHeight + 'px';
			elem.style.left = anCoords.left + pageXOffset + 'px';
			break;
		case 'bottom-out':
			elem.style.top = anCoords.bottom + pageYOffset + 'px';
			elem.style.left = anCoords.left + pageXOffset + 'px';
			break;
		case 'right-out':
			elem.style.top = anCoords.top + pageYOffset + 'px';
			elem.style.left = anCoords.right + pageXOffset + 'px';
			break;
		case 'top-in':
			elem.style.top = anCoords.top + pageYOffset + 'px';
			elem.style.left = anCoords.left + pageXOffset + 'px';
			break;
		case 'bottom-in':
			elem.style.top = anCoords.bottom + pageYOffset - elem.offsetHeight + 'px';
			elem.style.left = anCoords.left + pageXOffset + 'px';
			break;
		case 'right-in':
			elem.style.top = anCoords.top + pageYOffset + 'px';
			elem.style.left = anCoords.right + pageXOffset - elem.offsetWidth + 'px';
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

showNote(blockquote, "top-out", "note above-out");
showNote(blockquote, "right-out", "note at the right-out");
showNote(blockquote, "bottom-out", "note below-out");

showNote(blockquote, "top-in", "note above-in");
showNote(blockquote, "right-in", "note at the right-in");
showNote(blockquote, "bottom-in", "note below-in");
