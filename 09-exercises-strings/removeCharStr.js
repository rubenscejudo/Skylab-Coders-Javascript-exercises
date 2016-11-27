/*truncate
Write a JavaScript function to remove specified 
number of characters from a string.

console.log(truncate_string("Robin Singh",4));
"Robi"*/

function truncate_string(text) {
	var newText = text.slice(0,4);
	return newText;
}

truncate_string("Robin Singh",4)
