//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven(){
	var result=[0];
	var num=Math.round(Math.random()*100);
    for (var i = 1; i <= num; i++) {
    	if((i%2)==1){
    		result.push(i);
    	}
    }
    return result;
}
