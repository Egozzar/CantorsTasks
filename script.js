"use strict";

function getWeekDay(date) {
	let arr = ['ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];
	let day = date.getDay();

	return arr[day];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

