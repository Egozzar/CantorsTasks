"use strict";

function runOnKeys(func, ...args) {
	let sum = 0;

	document.addEventListener('keydown', (event) => {
		if ( args.includes(event.code) && !event.repeat ) sum++;

		if (sum == args.length) {
			sum = 0;
			func();
		}
	});

	document.addEventListener('keyup', (event) => {
		if ( args.includes(event.code) ) sum--;

		sum = sum < 0 ? 0 : sum;
	});
}

runOnKeys(
	() => alert("Привет!"),
	"KeyQ",
	"KeyW"
);