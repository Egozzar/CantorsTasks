"use strict";

function f(a) {
	console.log(a)
}

function throttle(func, ms) {
	let cache = [];
	let drag = null;

	function rec(...arg) {
		if (drag) {
			cache = [this, arg];
			return;
		}
		func.apply(this, arg);
		drag = true;

		setTimeout( () => {
			drag = null;
			if (cache.length) {
				rec.apply(cache[0], cache[1]);
				cache = [];
			}
		}, ms);
	}

	return rec;
}
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано