"use strict";

function getSecondsToday() {
	let middlenight = new Date().setHours(0, 0, 0, 0);

	return Math.round( (Date.now() - middlenight) / 1000 );
}


alert(getSecondsToday() );


