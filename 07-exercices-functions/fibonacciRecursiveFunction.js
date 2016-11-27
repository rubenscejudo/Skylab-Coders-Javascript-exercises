/* Fibonacci Challenge

The fibonacci sequence is a mathematical sequence of integers. 
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called `fibonacci` with a single argument `n` 
The function should return the nth number of the fibonacci sequence.

Hint: Use a _recursive_ function*/

function fibonacci(n) {
	if(n === 0) return 0;
	if(n === 1) return 1;
	return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(4);