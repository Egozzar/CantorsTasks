"use strict";

function createList() {
	let ul = document.createElement('ul');

	while (true) {
		let li = document.createElement('li');
		let exp = prompt('Добавь что-нибудь', '');
		if (!exp) break;

		li.append(exp);
		ul.append(li);
	}

	document.body.append(ul);
}

createList();