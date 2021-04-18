"use strict";
// цикл с двумя переменными
/*function fib(n) {
	let a = 1, b = 1;

	for (let i = 3; i <= n; i++) {

		if (a > b) b += a;
		else a += b;
	}

	return Math.max(a, b);
}*/
// цикл с тремя переменными
/*function fib(n) {
	let a = 1, b = 1, c;

	for (let i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}

	return b;
}*/
// рекурсия простая
/*function fib(n) {
	return n > 2 ? fib(n - 1) + fib(n - 2) : 1;
}*/
// рекурсия хвостовая
function fib(n) {
	return function fibIn(n, a, b) {

		return n > 0 ? fibIn(n - 1, b, a + b) :
			     n < 0 ? fibIn(n + 1, b, a - b) : a;
	}(n, 0, 1);
}


alert( fib(7) ); // 13
alert( fib(15) ); // 610