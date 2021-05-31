"use strict";

function showNotification({top = 0, right = 0, className, html}) {
	let div = document.createElement('div');
	div.style.top = top + 'px';
	div.style.right = right + 'px';
	div.className = 'notification';
	div.classList.add(className);
	div.innerHTML = html;
	document.body.append(div);
	setTimeout( () => div.remove(), 1000);
}

// test it
let i = 1;
setInterval(() => {
	showNotification({
		top: 10,
		right: 10,
		html: 'Hello ' + i++,
		className: "welcome"
	});
}, 2000);


