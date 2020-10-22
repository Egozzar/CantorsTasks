function randomInteger(min, max) {
	return  min + Math.floor( Math.random() * (max - min + 1) );
}

alert( randomInteger(5, 17) );