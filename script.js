"use strict";

function Calculator() {
	this.data = {
		'+' : (a, b) => a + b,
		'-' : (a, b) => a - b,
	}

	this.calculate = function(str) {
		let arr = str.split(' ');
		let num1 = +arr[0], num2 = +arr[2], op = arr[1];

		if (!isFinite(num1) || !isFinite(num2) || !this.data[op]) {
			return 'Error';
		}

		return this.data[op](num1, num2);
	}

	this.addMethod = function(str, func) {
		this.data[str] = func;
	}
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8