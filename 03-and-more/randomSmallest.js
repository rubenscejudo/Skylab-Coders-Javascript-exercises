/*Randomizes two numbers and prints the smallest number that is greater than one, 
such that both numbers are divided by it with no remainder. 
For instance, for 9 and 6 you should print 3. 
If there isn't one a proper note should be printed.*/


function randomSmallest() {
	var num1=Math.round(Math.random()*10);;
	var num2=Math.round(Math.random()*10);;
	var result=0;
	for (var i = 2; i < 10; i++) {
		if ((num1%i==0)&&(num2%i==0)){
			result=i;
			break;
		}
	}
	if (result==0){
		result='FAIL...'+num1+'-'+num2;
	} else {
		result='OK! '+num1+'-'+num2+' Result: '+result
	}
	return result;
}