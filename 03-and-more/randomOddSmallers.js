/*Randomizes a number (range 0..100), then prints all the odd numbers 
from 40 to that one. If the number was smaller than 40, print all 
the numbers down to the randomized one (i.e. if the result was 37, 
you should print: 40, 39, 38, 37)*/

function randomOddSmallers(){
	var result=[];
	var num=Math.round(Math.random()*100);
	if(num>=40){
		for (var i = 40; i <= num; i++) {
			if((i%2)==0){
				result.push(i);
			}
		}
	} else {
		for (var i = 40; i >= num; i--) {
			result.push(i);
		}
	}
	return result
}