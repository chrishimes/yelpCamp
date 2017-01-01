var newArray = [
['In Bruges', 5 , true], 
["Frozen", 4.5, false], 
["Mad Max Fury Road", 5, true], 
["Les Miserable", 3.5, false]
];


var movies = [
{
	title: "In Bruges",
	rating: 5 ,
	hasWatched: true
}, 
{
	title: "Frozen",
	rating: 4.5, 
	hasWatched: false
}, 
{
	title: "Mad Max Fury Road",
	rating: 5, 
	hasWatched: true
}, 
{
	title: "Les Miserable",
 	rating: 3.5, 
 	hasWatched: false
}
];


arraySize = newArray.length-1;
// console.log (arraySize);
movieSize = movies.length-1;
// console.log (movieSize);

var message
for (var i = 0; i <= arraySize; i++) {
	message =  "Nested array - You have "; 
	if (newArray[i][2]){
			message += "watched ";
		} else {
			message += "not seen \"";
		};
	message += newArray[i][0] + "\" - " + newArray[i][1] + " stars";

	console.log (message);
};
console.log("");
console.log("USE YOUR OWN MOVIES!");
console.log ("*********************");
console.log("");

// Simple forEach loop
// All the values are passed at once so you can them allow
// with each run through the loop

movies.forEach(function(movie, i){
	var results = "Key Value Pairs - You have ";
	if (movie.hasWatched){
			results += "watched \"";
		} else {
			results += "not seen \"";
		};
	results += movie.title
	results += "\" " + movie.rating + " stars"	
	console.log (results);
	}	
); 

console.log("");
console.log("USE YOUR OWN MOVIES!");
console.log ("*********************");	

// This use a function call in the forEach
// This allow you to use the buildString function in other locations
// Make sure to have the return at end of function so the results ccan be used.
function buildString(movie){
	var results = "Key Value Pairs - You have ";
	if (movie.hasWatched){
			results += "watched \"";
		} else {
			results += "not seen \"";
		};
	results += movie.title
	results += "\" " + movie.rating + " stars"	
	return results;
	}

movies.forEach(function(movie, i){
	console.log(buildString(movie));
}	
); 
	