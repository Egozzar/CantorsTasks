"use strict";

document.onclick = function(e) { // показывает координаты точки клика
	coords.innerHTML = e.clientX + ':' + e.clientY;
};

let field = document.getElementById('field');
let one = {}, two = {}, three = {}, four = {};
one.x = field.offsetLeft;
one.y = field.offsetTop;

two.x = one.x + field.offsetWidth;
two.y = one.y + field.offsetHeight;

three.x = one.x + field.clientLeft;
three.y = one.y + field.clientTop;

four.x = three.x + field.clientWidth;
four.y = three.y + field.clientHeight;

alert(`1 - ${one.x} : ${one.y}
2 - ${two.x} : ${two.y}
3 - ${three.x} : ${three.y}
4 - ${four.x} : ${four.y}`);
