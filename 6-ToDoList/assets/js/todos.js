//Check off Specific Todos by Clicking
//This will use to drill from the top down and 
//allow it to work on newly created items
$("ul").on("click", "li",  function(){
	$(this).toggleClass("completed");
});
 console.log("inside js file");

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//remove value in the text toDos
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> "+ todoText +"</li>");
	}
});