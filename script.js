"use strict";

function unique(arr) {
	let array = [];

	for (let elem of arr) {
		if ( array.includes(elem) ) continue;
		array.push(elem);
	}

	return array;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O


