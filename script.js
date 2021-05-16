"use strict";

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(collator.compare);

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК