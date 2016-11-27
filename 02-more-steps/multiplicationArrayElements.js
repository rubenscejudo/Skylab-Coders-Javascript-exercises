
/*multiply()

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/

function multiplication(aNumbers) {
    var currentNumber;
    var result = 0;
	for (var i = 0; i < aNumbers.length; i++){	
        currentNumber = aNumbers[i];
		result *= currentNumber;
	}
	return result;
}

multiplication([4,3,5,6]);