"use strict";

let links = document.querySelectorAll('a[href]');

links.forEach(elem => {
	if ( elem.matches('[href*="://"]:not([href^="http://internal.com"])') ) {
		elem.style.color = 'orange';
	}
})