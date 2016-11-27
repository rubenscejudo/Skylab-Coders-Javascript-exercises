/*Write a function findLongestWord() that takes an array of words 
and returns the length of the longest one.*/
function findLongestWord(aWords) {
	var longestWord = "";
	for( var i = 0; i < aWords.length; i++){
		if(longestWord.length < aWords[i].length){			 
			longestWord = aWords[i];
		}
	}
	return longestWord.length;
}

findLongestWord(["paco", "miguel", "asdfsadf"]);

