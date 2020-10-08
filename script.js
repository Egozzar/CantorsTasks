let userName = prompt('Who is here?', '');

if (userName === '' || userName === null) {
	alert('Canceled');
} else if (userName != 'Admin') {
	alert(`I don't know you`);
} else {
	let password = prompt('Enter your password');

	if (password === null) {
		alert('Canceled');
	} else if (password != `I'm chief`) {
		alert('Wrong password');
	} else {
		alert('Hello!');
	}
}