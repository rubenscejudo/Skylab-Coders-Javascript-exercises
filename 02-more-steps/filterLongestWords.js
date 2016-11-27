/*Write a function filterLongWords() that takes an array of words and an 
integer i and returns the array of words that are longer than i.*/

/*function findLongestWord() {
	var longestWord = "";
	for( var i=0; i<=findLongestWord.length; i++){
		if(findLongestWord[i] > longestWord ){
			longestWord = findLongestWord[i];
		}
	return longestWord;
	}
}

findLongestWord(["paco", "miguel", "asdfsadf"]);*/

function findLongestWord(listWords) {
	var currentWord;
	var longestWord = "";

	for(var i =0; i<listWords.length; i++){
		currentWord = listWords[i];
		if(currentWord.length > longestWord.length){
			longestWord = currentWord;
		}
	}
	return longestWord;
}
findLongestWord("SDF", "sdfgdfg", "kljlkdkd")