// alert("Hello from the JS file!");

var userFirst = prompt("What is your first name?");
var userLast = prompt("What is your last name?");
var userAge = prompt("What is your age?");
// alert("Nice to meet you " + userName);

console.log("Your name is " +userFirst+ " " +  userLast);
console.log("You are " + userAge + " years old.")

var messageOut, messageOut2
if (userAge < 18){
	messageOut= "Sorry, you are not old enough to enter the venue.";
}
else if (userAge === 21){
	messageOut = "Happy 21st birthday!"
}
else if (userAge < 21){
	messageOut = "You can enter, but cannot drink.";
}
else {
	messageOut = "Come on in. You can drink.";
}

var aa = [" You are even years.", " You are odd years."];

messageOut = messageOut + aa[userAge % 2];

// If age is a perfect square
if(userAge % Math.sqrt(userAge) === 0) {
  messageOut = messageOut + "Your age is a perfect square!";
}

console.log(messageOut)

