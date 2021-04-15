"use strict";

// фильтрация на объекте
/*function aclean(array) {
	let obj = {};

	array.forEach(val => {
		let res = val.toLowerCase().split('').sort();
		obj[res] = val;
	});

	return Object.values(obj);
}*/

//фильтрация на map
function aclean(array) {
	let map = new Map();

	array.forEach(val => {
		let res = val.toLowerCase().split('').sort().join('');
		map.set(res, val);
	});

	return Array.from( map.values() );
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


