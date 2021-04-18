"use strict";

function inBetween(a, b) {
	return function(val) {

		return val >= a && val <= b;
	}
}

function inArray(arr) {
	return function(val) {

		return arr.includes(val);
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2