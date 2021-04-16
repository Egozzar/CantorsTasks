"use strict";

function formatDate(date) {
	let deff = Math.round((Date.now() - date) / 1000);

	return deff < 1 ? `прямо сейчас` :
		     deff < 60 ? `${deff} сек. назад` :
				deff < 3600 ? `${Math.round(deff / 60)} мин. назад` : formating(date);
}

function formating(d) {
	let yy = d.getFullYear();
	let mm = d.getMonth() + 1;
	let dd = d.getDate();
	let hh = d.getHours();
	let min = d.getMinutes();

	let arr = [dd, mm, yy, hh, min].map( (val) => {
		return ('0' + val).slice(-2);
	});

	return `${arr[0]}.${arr[1]}.${arr[2]} ${arr[3]}:${arr[4]}`;
}


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );