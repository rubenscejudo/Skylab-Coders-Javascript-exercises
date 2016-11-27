/* first

Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/



function first (array, numElements){
	if(numElements === undefined) {
		return array[0]
	}
	else {	
		function isFirst (elem, index){
			return index  < numElements;
		}
	}
	return array.filter(isFirst)
}	

// a[1] = 5*/
/*Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] */