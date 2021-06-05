"use strict";

let title = document.querySelector('span');
let ul = document.querySelector('ul');
ul.hidden = true;
title.style.cursor = 'pointer';

title.addEventListener('click', touchTitle);

function touchTitle() {
	ul.hidden = !ul.hidden;
	title.classList.toggle('click');
}