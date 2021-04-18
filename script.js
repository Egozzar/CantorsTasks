"use strict";
// цикл
/*function sumTo(n) {
	let sum = 0;

	while (n) {
		sum += n--;
	}

	return sum;
}*/
// рекурсия
/*function sumTo(n) {
	return n ? n + sumTo(n - 1) : 0;
}*/
//формула Гаусса
function sumTo(n) {
	return (n + 1) * (n / 2);
}

alert( sumTo(100) ); // 5050