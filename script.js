"use strict";
// цикл
/*function factorial(n) {
	let res = 1;

	while (n) {
		res *= n--;
	}

	return res;
}*/
// рекурсия
function factorial(n) {

	return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120