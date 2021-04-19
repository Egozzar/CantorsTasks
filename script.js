"use strict";

function makeCounter() {
	let count = 0;

	function func() {
		return count++;
	}

	func.set = function(val) {
		count = val;
	}

	func.decrease = function() {
		count--;
	}

	return func;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)