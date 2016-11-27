/*Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14*/


function randomSum() {
	var num=0;
	var result=0;
	while (num<1000 || num>9999) {
		num=Math.round(Math.random()*10000);
	}
	console.log(num);
	for (var i = 0; i < num.toString().length; i++) {
		result+=parseInt(num.toString()[i],10)
	}
	return result;
}