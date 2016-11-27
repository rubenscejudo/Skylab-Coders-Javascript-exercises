/*capitalize_first

Write a JavaScript function to capitalize the first letter of a string.

console.log(capitalize('js string exercises'));
"Js string exercises"*/

function capitalize(text) {
	var capitalizeFirst = text.charAt(0).toUpperCase() + text.slice(1);
	return capitalizeFirst;
}
capitalize('js string exercises');