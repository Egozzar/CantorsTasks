function checkSpam(str) {
	str = str.toLowerCase();
	return str.includes('xxx') || str.includes('viagra');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );