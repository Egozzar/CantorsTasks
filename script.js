"use strict";

let tree = document.getElementById('tree');
let lis = tree.querySelectorAll('li');
lis.forEach(elem => {
	elem.insertAdjacentHTML('afterbegin', '<span></span>');
	elem.firstChild.append(elem.firstChild.nextSibling);
})

tree.addEventListener('click', (event) => {
	let tar = event.target.closest('span');
	let firstUl = tar?.parentElement.querySelector('ul');
	firstUl?.classList.toggle('hidden');
});