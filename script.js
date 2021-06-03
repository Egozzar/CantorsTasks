"use strict";

let button = document.querySelector('[type="button"]');
let div = document.getElementById('text');

button.addEventListener('click', () => div.style.display = "none");
