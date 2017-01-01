function isEven(var1){
	if (var1 % 2 === 1){
		return (var1 + " is an odd number");
	}
	return (var1 + " is an even number");
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

function factorial(num){
	var results = 1;
	for (var i = 2; i <= num; i++) {
		results *= i;
	}
	return results;

}

function kebabToSnake(str){

	// Is there a dash to replace
	var newstr = str.replace(/-/g , "_");
	return newstr;
	// return input


}