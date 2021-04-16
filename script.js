"use strict";

function getDateAgo(date, days) {
	let cloneDate = new Date(date);
	cloneDate.setDate( cloneDate.getDate() - days);

	return cloneDate.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

