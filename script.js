"use strict";

function sum(a) {
	let res = a;

	function sumIn(b) {
		res += b;
		return sumIn;
	}

	sumIn.toString = function() {
		return res;
	}

	return sumIn;
}

alert( sum(1)(2) ); // 1 + 2
alert( sum(1)(2)(3) ); // 1 + 2 + 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15