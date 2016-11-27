/*String combinations

Write a JavaScript function that generates all combinations of a string

Example string : 'dog' 
Expected Output : d,do,dog,o,og,g */

function strCombinations(text) {
	var aText = text.split("");
	var currentValue = "";
	for (var i = 0; i < aText.length; i++) {
		for (var j = 0; j < aText.length; j++) {
			currentValue +=	aText[i] + aText[j];
		}
	}
	return currentValue;
}

strCombinations("dog")
"dddodgodoooggdgogg"

function strCombinations(text) {
	var aText = text.split("");
	var currentValue = "";
	for (var i = 0; i < aText.length; i++) {
			currentValue +=	aText[i] + ",";
		}
	}
	return currentValue;
}

strCombinations("dog")