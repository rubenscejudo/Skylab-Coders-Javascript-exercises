/*parameterize

Write a JavaScript function to parameterize a string.

console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"*/

function string_parameterize(text) {
	var lowCaseText = text.toLowerCase("");
	var parameterizeText = "";
	for (var i = 0; i < lowCaseText.length; i++) {
		if(lowCaseText[i] === " "){
			parameterizeText += "-";
		}
		parameterizeText += lowCaseText[i]
	}
	return parameterizeText;
}
string_parameterize("Robin Singh from USA.");

/*--------------------------------------------------------*/

function string_parameterize(text) {
	var lowCaseText = text.toLowerCase("");
	var replacer = "-"
	var parameterizeText = lowCaseText.replace(/\s/g, replacer);
	return parameterizeText;
}

string_parameterize("Robin Singh from USA.");