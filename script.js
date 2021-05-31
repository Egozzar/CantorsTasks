"use strict";

let field = document.getElementById('field');
let width = field.clientWidth;
let height = field.clientHeight;

let ball = document.getElementById('ball');
let ballSize = getComputedStyle(ball).width;

setTimeout( () => {
	ball.style.top = height / 2 - (parseInt(ballSize) / 2) + 'px';
	ball.style.left = width / 2 - (parseInt(ballSize) / 2) + 'px';
}, 2000);
