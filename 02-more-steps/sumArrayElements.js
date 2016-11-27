/*Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/


function sum(arrayNumbers) {
	var result = 0;
    var currentNumber = 0;
	for (var i = 0; i <= arrayNumbers.length; i++){	//con <= en el bucle el resultado es NaN
        currentNumber = arrayNumbers[i];
		result += currentNumber;
	}
	return result;
}

sum([4,3,5,6]);
// este funciona y el de hay que probarlo
function sum(aNumbers) {
    var currentNumber;
    var result = 0;
	for (var i = 0; i < aNumbers.length; i++){	
        currentNumber = aNumbers[i];
		result += currentNumber;
	}
	return result;
}

sum([4,3,5,6]);












var sum = function(array) {
  var length = array.length;
  var total = 0;
  for (i = 0; i < length; i++) {
    total += array[i];
  }
  return total;
};

