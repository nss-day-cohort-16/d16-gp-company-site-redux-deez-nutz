var nutArray = [
{
	"Strain": "Walnut",
	"Appearance": "Rustic Brown",
	"Flavor": "Mildly Nutty",
	"Accompanies": "White Wine",
	"Occasions": "Labor Day",
	"Price": "$8.99 per Lb.",
	"Image": "images/walnut.jpg"
},
{
	"Strain": "Cashew",
	"Appearance": "Golden Brown",
	"Flavor": "Earthy Hues",
	"Accompanies": "Coffee",
	"Occasions": "Despair",
	"Price": "$15.99 per Lb.",
	"Image": "images/cashews.jpg"
},

{
	"Strain": "Pistachios",
	"Appearance": "Greeny Yellow",
	"Flavor": "As expected",
	"Accompanies": "Sharp Jack, Vermont",
	"Occasions": "Grandma's Disco Party",
	"Price": "$11.99 per Lb.",
	"Image": "images/pistachios.jpg"
},

{
	"Strain": "Coconut",
	"Appearance": "Furry",
	"Flavor": "Sun Tan Lotion",
	"Accompanies": "Lime in the",
	"Occasions": "Luau's",
	"Price": "$1.99 per Lb.",
	"Image": "images/coconuts.jpg"
},

{
	"Strain": "Wing Nut",
	"Appearance": "Metallica",
	"Flavor": "Iron",
	"Accompanies": "Hardware",
	"Occasions": "Hard Work",
	"Price": "$.99 per Lb.",
	"Image": "images/wingNut.JPG"
},

{
	"Strain": "Tee Nut",
	"Appearance": "T Like",
	"Flavor": "Sweet",
	"Accompanies": "Wood",
	"Occasions": "Carpentry",
	"Price": "$.99 per Lb.",
	"Image": "images/teeNut.jpg"
},

];




for (var i = 0; i < nutArray.length; i++) {
	var currentNutArray = nutArray[i];
	var strain = "<h2 class='strain'>" + "Strain: "+ currentNutArray.Strain + "</h2>";
	var image = "<img class='nutPics' src='" + currentNutArray.Image + "'>";
	var appearance = "<h4 id='appearance'>" + "Appearance: " + currentNutArray.Appearance + "</h4>"; 
	var flavor = "<p>" + "Flavor: " + currentNutArray.Flavor + "</p>";
	var accompanies = "<p>" + "Accompanies: "+ currentNutArray.Accompanies + "</p>";
	var occassions = "<p>" + "Occasions: " + currentNutArray.Occasions + "</p>";
	var price = "<h5>" + "Price: " + currentNutArray.Price + "</h5>";


	var outputDiv = document.getElementById("productsOutput");
	outputDiv.innerHTML += "<div class='card'>" + image + strain + appearance + flavor + accompanies + occassions + price + "</div>";
}
	
	









// console.log("output", productsOutput);



















