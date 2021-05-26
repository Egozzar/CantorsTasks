"use strict";

let table = document.getElementById('age-table');
alert(table.rows.length);

let labels = table.querySelectorAll('label');
alert(labels.length);

let age = table.querySelector('td');
alert(age.innerHTML);

let form = document.body.querySelector('form[name="search"]');
alert(form.name);

let input = form.querySelector('input');
alert(input.type);

let lastInput = form.lastElementChild;
alert(lastInput.type);










