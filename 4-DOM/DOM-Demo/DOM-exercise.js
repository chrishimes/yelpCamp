var button = document.querySelector("button");

isPurple = true;

//**************************
//This can run with out adding anything to the page
//**************************

// button.addEventListener("click", function(){

// 	if(isPurple){
// 		document.body.style.background = "purple";
// 	} else{
// 		document.body.style.background = "white";
// 	}
//   	isPurple = !isPurple;
// });

//**************************
// This uses the toggle feature with less lines of code
//Must add the css to the other page
	// <style type="text/css">
	// 	.purple{
	// 		background: purple;
	// 	}
	// </style>
//**************************
button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});

console.log("I am connected3");