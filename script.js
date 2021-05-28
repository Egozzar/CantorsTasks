"use strict";

function showChildren(elem) {
	let lis = elem.querySelectorAll('li');

	for (let li of lis) {
		let num = li.querySelectorAll('li').length;
		if(!num) continue;

		li.firstChild.data += ` [${num}]`;
	}
}

let ul = document.body.firstElementChild;
showChildren(ul);