/*Is palindrome?

Write a JavaScript function that checks whether a passed string is palindrome or not
A palindrome is word, phrase, or sequence that reads the same backward as forward, 
e.g., madam or nurses run.*/

function isPalindrome(text) {
	var reversedText = text.split("").reverse().join("");
	if (reversedText === text) {
		return true;
	}
	else {
		return false;
	}
}

isPalindrome("madam");


