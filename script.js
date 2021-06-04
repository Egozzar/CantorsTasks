"use strict";

let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.style.cursor = 'pointer';
ball.style.position = 'absolute';
field.style.position = 'relative';
ball.style.left = 0;
ball.style.top = 0;

field.addEventListener('click', touchBall);

function touchBall(event) {
	let paramBall = ball.getBoundingClientRect();
	let paramField = this.getBoundingClientRect();

	let posX = event.clientX - paramField.left - field.clientLeft - (paramBall.width / 2 );
	let posY = event.clientY - paramField.top - field.clientTop - (paramBall.height / 2 );

	if (posX < 0) posX = 0;

	if (posX  > field.clientWidth - paramBall.width) {
		posX = field.clientWidth - paramBall.width;
	}

	if (posY < 0) posY = 0;

	if (posY > field.clientHeight - paramBall.height) {
		posY = field.clientHeight - paramBall.height;
	}

	ball.style.left = posX + 'px';
	ball.style.top = posY + 'px';
}