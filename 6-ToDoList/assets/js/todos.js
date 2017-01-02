//Check off Specific Todos by Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});
 console.log("inside js file");

//Click on X to delete Todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});