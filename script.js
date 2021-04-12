"use strict";

function camelize(str) {
	let array = str.split('-');
	let res = array.map( (val, ind) => {

		if (ind) {
			return val[0].toUpperCase() + val.slice(1);
		} else return val;
	});

	return res.join('');
}

alert( camelize("background-color") ); // == 'backgroundColor'
alert( camelize("list-style-image") ); // == 'listStyleImage'
alert( camelize("-webkit-transition") ); // == 'WebkitTransition'