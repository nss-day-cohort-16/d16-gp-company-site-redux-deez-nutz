function Nut(strain, appearance, flavor, accompanies, occasions, price, image) {
	this.strain = strain;
	this.appearance = appearance;
	this.flavor = flavor;
	this.accompanies = accompanies;
	this.occasions = occasions;
	this.price = price;
	this.image = image;
}

var walnut = new Nut ("Walnut", "Rustic Brown", "Mildly Nutty", "White Wine", "Labor Day", "8.99 per lb.", "images/walnut.jpg");

var cashew = new Nut ("Cashew", "Golden Brown", "Earthy Hues", "Coffee", "Despair", "$15.99 per Lb.", "images/cashews.jpg");

var pistachio = new Nut ("Pistachios", "Greeny Yellow", "As expected", "Sharp Jack, Vermont", "Grandma's Disco Party", "$11.99 per Lb.","images/pistachios.jpg");

var coconuts = new Nut ("Coconut", "Furry", "Sun Tan Lotion", "Lime in the", "Luau's", "$1.99 per Lb.", "images/coconuts.jpg");

var wingNut = new Nut ("Wing Nut", "Metallica","Iron", "Hardware","Hard Work", "$.99 per Lb.", "images/wingNut.JPG");

var teeNut = new Nut ("Tee Nut","T Like","Sweet","Wood","Carpentry","$.99 per Lb.", "images/teeNut.jpg");

var nutArray = [];
nutArray.push(walnut, cashew, pistachio, coconuts, wingNut, teeNut);

// console.log(nutArray);

for (var i = 0; i < nutArray.length; i++) {
	var currentNutArray = nutArray[i];
	var nutString = "<h2 class='strain'>" + "Strain: "+ currentNutArray.strain + "</h2>" + "<img class='nutPics' src='" + currentNutArray.image + "'>" + "<h4 id='appearance'>" + "Appearance: " + currentNutArray.Appearance + "</h4>" + "<p>" + "Flavor: " + currentNutArray.flavor + "</p>" +"<p>" + "Accompanies: "+ currentNutArray.accompanies + "</p>" + "<p>" + "Occasions: " + currentNutArray.occasions + "</p>" + "<h5>" + "Price: " + currentNutArray.price + "</h5>";

	var outputDiv = document.getElementById("productsOutput");
	outputDiv.innerHTML += "<div class='card'>"+ nutString + "</div>";
}
 
 

	
	























