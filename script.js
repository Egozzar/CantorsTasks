"use strict";

let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, p, receiver) {
		if (p < 0) {
			return target[target.length + +p];
		}
		return Reflect.get(...arguments);
	},
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2