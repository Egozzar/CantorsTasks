"use strict";

function createCalendar(elem, year, month) {
	month--;
	let table = document.createElement('table');
	table.append( createTitle() );

	let date = new Date(year, month);
	let weekDay = date.getDay();
	weekDay = weekDay ? weekDay : 7;
	let last = new Date(year, month + 1, 0);
	let days = last.getDate();

	function createTr(from, to, numberDay) {
		let tr = document.createElement('tr');
		table.append(tr);

		while (tr.children.length < 7) {
			let td = document.createElement('td');
			td.innerHTML = tr.children.length < numberDay - 1 ? '&nbsp;' :
				             from <= to ? from++ : '&nbsp;';
			tr.append(td);
		}

		if (from <= to) {
			createTr(from, to);
		}
	}

	createTr(1, days, weekDay);
	document.body.append(table);
}

function createTitle() {
	let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',];
	let trTitle = document.createElement('tr');

	week.forEach(elem => {
		let th = document.createElement('th');
		th.innerHTML = elem;
		trTitle.append(th);
	});
	return trTitle;
}

let calendar = document.getElementById('calendar');
createCalendar(calendar, 2012, 9);