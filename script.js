"use strict";

let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};

let container = document.getElementById('container');

function createTree(elem, obj) {
	if (Object.keys(obj).length) {
		let ul = document.createElement('ul');

		for (let key in obj) {
			let li = document.createElement('li');
			li.textContent = key;
			ul.append(li);
			createTree(li, obj[key]);
		}
		elem.append(ul);
	}
}

createTree(container, data);