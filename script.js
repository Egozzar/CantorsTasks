"use strict";

let genres = document.getElementById('genres');
let selected = genres.options[genres.selectedIndex];

alert(selected.innerHTML);
alert(selected.value);

let option = new Option('Классика', 'classic', true, true);

setTimeout(() => {
	genres.append(option);
}, 1500);