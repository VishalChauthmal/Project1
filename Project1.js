function change_colour(id)
{
	var changehu=[
		"green",
		"blue",
		"white",
		"yellow",
		"black"
	];
	document.getElementById(id).style.backgroundColor= change[Math.floor((Math.random() * 10)%7)];
}