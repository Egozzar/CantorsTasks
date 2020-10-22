"use strict";

function sumInput() {
	let arr = [];
	let sum = 0;
	let val;

	while (true) {
		 val = prompt('Введите значение', '');
		if (val === null || val === '' || !isFinite(val)) break;
		arr.push(val);
	}

	for (let val of arr) {
		sum += +val;
	}

	return sum;
}

alert( sumInput() );