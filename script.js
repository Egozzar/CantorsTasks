"use strict";

function makeObservable(target) {
	target.data = [];
	target.observe = (func) => target.data.push(func);

	return new Proxy(target, {
		set(target, p, value, receiver) {
			target.data.forEach( elem => elem(p, value));
			return Reflect.set(...arguments);
		}
	})
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
	alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John