"use strict";
// setInterval
/*function printNumbers(from, to) {
	let i = from;

	let timer = setInterval( () => {
		if (i <= to) {
			console.log(i++);
		} else {
			clearInterval(timer);
		}
	}, 1000);
}*/
// setTimeout
function printNumbers(from, to) {
	let i = from;

	setTimeout(function run() {

		if (i <= to) {
			console.log(i++);
			setTimeout(run, 1000);
		}
	}, 1000);
}

printNumbers(4, 9);