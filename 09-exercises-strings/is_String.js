/*is_string

Write a JavaScript function to check whether an input is a string or not.
Go to the editor
console.log(is_string('w3resource')); 
true
console.log(is_string([1, 2, 4, 0]));
false*/

function is_string (text) {
	if (typeof text === "string" )   {
    	return true;
	} 
	else {
		return false;
	}
}

//console.log(is_string([1, 2, 4, 0]));
//console.log(is_string('w3resource')); 
