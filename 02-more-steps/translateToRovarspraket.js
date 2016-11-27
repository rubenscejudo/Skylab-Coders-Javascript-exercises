/*translate()

Write a function translate() that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between. 
For example,translate("this is fun") should return the string "tothohisos isos fofunon".*/
//De dos formas diferentes:

function translate( text ) {

	var currentLetter = "";
	var translatedText = "";

	function isVowel( letter ) {
		return ("aeiou ".indexOf(letter) != -1)
	}

	for (var i=0; i<text.length; i++) {

		currentLetter = text[i];
		if ( isVowel(currentLetter) ) {
			translatedText += currentLetter;
		}
		else {
			translatedText += currentLetter + "o" + currentLetter;
		}

	}
	return translatedText;

}

translate("this is fun");



function translate( string ) {

    var vowel = ["a","e","i","o","u", " "];
    var splitedStr = string.split(""); // array of string
    var newStr = "";
    var isVowel;
    var currentLetter = "";

    for( var i=0; i<splitedStr.length; i++) {
        currentLetter = splitedStr[i];
        isVowel = false;
        
        for (var j=0; j<vowel.length; j++) {
            if(currentLetter == vowel[j]){
                isVowel = true;
            }
        }

        if ( isVowel ) {
            newStr += currentLetter;
        }
        else {
            newStr += currentLetter + "o" + currentLetter ;   
        }

    }

    return newStr;

}

translate("this is fun")


