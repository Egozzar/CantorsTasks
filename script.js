"use strict";

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};
// вывод через цикл
/*function printList(obj) {
	while (obj) {
		alert(obj.value);
		obj = obj.next;
	}
}*/

// вывод через цикл в обратном порядке
/*function printList(obj) {
	let arr = [];

	while (obj) {
		arr.unshift(obj.value);
		obj = obj.next;
	}

	arr.forEach(alert);
}*/
//вывод через рекурсию
/*function printList(obj) {
	alert(obj.value);

	if (obj.next) printList(obj.next);
}*/
//вывод через рекурсию в обратном порядке
function printList(obj) {
	if (obj.next) printList(obj.next);

	alert(obj.value);
}

printList(list);