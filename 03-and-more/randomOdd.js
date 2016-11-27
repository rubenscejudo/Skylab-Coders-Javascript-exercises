//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one.
//If the number was smaller than 40 nothing should be printed

function randomOdd() {
	var result=[];
	var num=Math.round(Math.random()*100);
    for (var i = 40; i <= num; i++) {
    	if((i%2)==0){
    		result.push(i);
    	}
    }
    return result;
}