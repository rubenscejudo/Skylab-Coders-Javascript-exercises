/*Randomizes a number n in range 0..100. Now randomizes n more numbers in 
that range, printing the largest of them.*/

function randomRandom(){
	var numbers=[];
	var num=Math.round(Math.random()*100);
    for (var i = 1; i <= num; i++) {
    	numbers.push(Math.round(Math.random()*100));
    }
    numbers.sort(function(a, b) { return a - b; });
    console.log(numbers);
    return numbers[numbers.length-1]
}