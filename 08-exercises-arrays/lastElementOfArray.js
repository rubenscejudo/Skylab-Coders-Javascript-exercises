/* last

Write a JavaScript function to get the last elementof an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.*/
/*function last(array, lastElement) {
	if(lastElement === array.length -1)
		return array;
	    console.log(array);
	else{
		function lastElement (element, index) {
			return index 
		}
	}
}*/

function last (array, numElements){
	if(numElements === undefined) {
		return array[0]
	}
	else {	
		function isLast (elem, index){
			return index  < numElements;
		}
	}
	return array.filter(isLast);
}


console.log(last([7, 9, 0, -2])); 
7

//console.log(last([7, 9, 0, -2],3)); 

//console.log(last([7, 9, 0, -2],6));
/*Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]*/