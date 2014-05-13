function change_colour(id)
{
	var change=[
		"red",
		"green",
		"blue",
		"white",
		"yellow",
		"black"
	];
	document.getElementById(id).style.backgroundColor= change[Math.floor((Math.random() * 10)%7)];
}