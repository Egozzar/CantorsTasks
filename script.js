"use strict";

let user = {
	name: "John"
};

function wrap(target) {
	return new Proxy(target, {
		get(target, p, receiver) {
			if (p in target) {
				let val = Reflect.get(...arguments);
				return val.bind ? val.bind(target) : val;
			}
			throw new MyError('Такого свойства не существует');
		},
	});
}

class MyError extends Error {
	constructor(props) {
		super(props);
		this.name = this.constructor.name;
	}

}

user = wrap(user);

try {
	alert(user.name); // John
	alert(user.age); // Ошибка: такого свойства не существует
} catch (e) {
	alert(e);
}