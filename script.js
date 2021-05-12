"use strict";

function* pseudoRandom(seed) {
	let val = seed;

	for (let i = 0; i < 3; i++) {
		val = val  * 16807 % 2147483647;
		yield val;
	}
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073