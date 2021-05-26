"use strict";

let ul = document.body.querySelector('ul');
let lis = ul.querySelectorAll('li');

for (let res of lis) {
	let text = res.firstChild.data.trim();
	let lisIn = res.querySelectorAll('li');

	alert(`${text}: ${lisIn.length}`);
}
