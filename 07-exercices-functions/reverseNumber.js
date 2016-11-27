/*## Reverse Number 

Write a JavaScript function that reverse a number

    Example x = 32243;
    Expected Output : 34223 */

function reverseNumber(x) {
	var reversed = 0;
	for (var i = arguments.length -1; i >= 0; i--) {
	reversed = arguments[i]
	}
	return reversed;
}
reverseNumber(32243);


