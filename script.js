"use strict";
function sorting(element) {
	let trs = Array.from(element.rows);
	let trsSort = trs.slice(1).sort( (a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);
	trsSort.unshift(trs[0]);

	trsSort.forEach((elem) => {
		element.firstElementChild.append(elem);
	});
}

let table = document.getElementById('table');
setTimeout(sorting, 2000, table);


