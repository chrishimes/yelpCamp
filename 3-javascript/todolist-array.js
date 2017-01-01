var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit"){
	if (input === "list"){
		listTodos();
	} else if (input === "new"){
		listAddTodos();
	} else if (input === "delete"){
		deleteTodos();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
	console.log("OK, YOU QUIT THE APP");

	function listTodos(){
		console.log("**********");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********");	
	}

	function listAddTodos(){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Item added");
	}

	function deleteTodos(){
		//ask what index
		index = prompt("Enter index of item to delete");
		// delete item in array
		todos.splice(index, 1);
		console.log("Deleted Todo");		
	}