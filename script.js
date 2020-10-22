function readNumber() {
	let val;

	while (true) {
		val = prompt('Введите число', '');

		if (val === null || val === '') return null;
		if ( isFinite(val) ) break;
	}

	return +val;
}

alert( readNumber() );