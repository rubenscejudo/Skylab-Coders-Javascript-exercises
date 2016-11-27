/*String Calculator

Define a function called `add` with a single argument `input`. 
The input to the function will be a string containing a comma-separated list of numbers. 
The function must return the sum of the numbers. e.g.

    add(1,2,3,4) // => 10*/


function add(imput) {
	var result = 0;
	for (var i = 0; i< arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

add(1,2,3,4)

