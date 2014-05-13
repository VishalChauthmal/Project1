function change_colour(id)
{
	var colors=[
		"red",
		"green",
		"blue",
		"white",
		"yellow",
		"black"
	]
	document.getElementById(id).style.backgroundColor=colors[Math.floor((Math.random() * 10)%7)];
}