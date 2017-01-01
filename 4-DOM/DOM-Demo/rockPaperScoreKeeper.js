console.log("Connect to js1");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2"); //Just another way to the element
var resetButton = document.querySelector("#reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector('input[type="number"]');
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			//p1Display.innerHTML = p1Score;
			gameOver = true;
			p1Display.classList.add("winner");
		}

		p1Display.innerHTML = p1Score;
	}	

});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			//p2Display.innerHTML = p2Score;
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.innerHTML = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.innerHTML = p1Score;
	p2Display.innerHTML = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});









