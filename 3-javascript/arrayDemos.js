console.log("connected");

function printReverse(setValue){
	varSize = setValue.length;
	for (var i = varSize-1; i >= 0; i--) {
		console.log(setValue[i])
	}
	// setValue.forEach(function(todo, i){
	// console.log(i + ": " + todo);
	// });
	// console.log

	 console.log(varSize);
}

printReverse([1,2,3,4]);
printReverse(["a", "b", "c"]);

//*** isUniForm() ***
function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[1] !== first){
			return false;
		}
	}
	return true;
}

isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

//*** sumArray() ***
function sumArray(mathSum){
	var sumTotal = 0;
	mathSum.forEach(function(eachSum, i){
	sumTotal += eachSum;
//	console.log (eachSum);
	});

	console.log(sumTotal);
}

sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);

//*** max() *** Get max element
function max(maxNum){
	var largestNum = maxNum[0];
	maxNum.forEach(function(newNum, i){
	if(largestNum < newNum){
		largestNum = newNum
	} 
		console.log (largestNum);
	});
}

max([1, 2, 3]);
max([10, 3, 10, 4]);
max([-5, 100, 99, 100.15, 77, 44]);

