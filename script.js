"use strict";

let timer;

function run () {
	let hour = document.querySelector('.hour');
	let min = document.querySelector('.min');
	let sec = document.querySelector('.sec');

	let date = new Date();
	let str = date.toLocaleTimeString();

	hour.innerHTML = str.slice(0, 2);
	min.innerHTML = str.slice(3, 5);
	sec.innerHTML = str.slice(6);
}

function clockStart() {
	timer = setInterval(run, 1000);
	run();
}

function clockStop() {
	clearInterval(timer);
}