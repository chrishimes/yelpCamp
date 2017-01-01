console.log("connect to js to do");

// var firstLI = document.querySelector("li");

// firstLI.addEventListener("mouseover", function(){
// 	firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function(){
// 	firstLI.style.color = "black";
// });

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		//this.style.color = "green"; //below code move the css changes to the css file
		this.classList.add("selected")
	});

	lis[i].addEventListener("mouseout", function(){
		//this.style.color = "black";
		this.classList.remove("selected")
	});
	
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}









