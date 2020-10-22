function truncate(str, maxlength) {
	return str.length <= maxlength ? str :
		     str.slice(0, maxlength - 1) + "…";
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );// "Вот, что мне хотело…"

alert( truncate("Всем привет!", 20) );// "Всем привет!"