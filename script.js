"use strict";

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
	return function(a, b) {

		return a[fieldName] > b[fieldName] ? 1 : -1;
	}
}

users.sort( byField('name') );
alert( JSON.stringify(users) );

users.sort( byField('age') );
alert( JSON.stringify(users) );