//toString

var fruits = ["Banana", "orange", "mango", "apples"];
document.getElementById("demo").innerHTML = fruits.toString();

//the join method

var veggies =["Broccoli", "kale", "carrots"]
document.getElementById("vegetables").innerHTML = veggies.join(" ~ ");


//the pop method

var veggies = ["Broccoli", "kale", "carrots"]
document.getElementById("removeVeggie").innerHTML = veggies;
	function myFunction() {
		veggies.pop();

		document.getElementById("removeVeggie").innerHTML = veggies;

	}

//push method adds new element to the array - at the end

var veggies = ["Broccoli", "kale", "carrots"];
document.getElementById("vegetables").innerHTML = veggies;
function myFunction1() {
	veggies.push("yam")

	document.getElementById("vegetables").innerHTML = veggies
}

//shifting elements

//equivalent to popping, working on 1st element instead of last - removes the first array and shifts all other elements to a lower index

var languages = ["javascript", "jQuery", "css", "html", "italian"]
document.getElementById("shifty").innerHTML = languages;
	function myFunction2() {
		languages.shift();

	document.getElementById("shifty").innerHTML = languages;

	}


//UNshift
var cities = ["Florence", "Sayulita", "Venice Beach", "Napoli"]
document.getElementById("travelCity").innerHTML = cities
	function myFunction3() {
		cities.unshift("San Francisco")

document.getElementById("travelCity").innerHTML = cities

	}


//USING LENGTH PROPERTY TO APPEND ITEMS TO ARRAY

var flowers = ["tulips", "gardenias", "roses"]
document.getElementById("appendMe").innerHTML = flowers
	function myFunction4() {
		flowers[flowers.length] = "peonies"

	document.getElementById("appendMe").innerHTML = flowers
}
	
//SPLICING

var peeps = ["Eric", "Sarah", "Sara", "Veronica"]
document.getElementById("people").innerHTML = peeps
	function myFunction5() {
		peeps.splice(0, 3) //using the index to show what to splice

	document.getElementById("people").innerHTML = peeps
}


//SORTING - ALPHABETICAL - and then REVERSE it! 
var sortable = ["elephants", "aardvark", "lotus", "beach", "bracelets", "ninjas", "unicorns"]
document.getElementById("sortMe").innerHTML = sortable
	function myFunction6() {
		sortable.sort()
		sortable.reverse()
		document.getElementById("sortMe").innerHTML = sortable
	}

//REVERSE IT - see above

//SORT IN ASCENDING ORDER/NUMERICAL SORT

var ages = [43, 32, 49, 73, 6, 3]
document.getElementById("familyAges").innerHTML = ages
	function ageFunction() {
		ages.sort(function(a, b){return a-b}) // this is where you'd find lowest/highest value, can also flip it to b-a, or b>a, etc

		document.getElementById("familyAges").innerHTML = ages
	}

//CONCAT/JOINING ARRAYS
function concatFunction() {
	var arr1 = ["Rachel, Mark"]
	var arr2 = ["Chloe", "Cooper"]
	var arr3 = ["Tess"]

document.getElementById("fam").innerHTML = arr1.concat(arr2, arr3)
}


//SLICE IT!

var cake = ["Chocolate", "Confetti", "Layer", "Red Velvet"]
var piece = cake.slice(0,3)
document.getElementById("cake").innerHTML = cake + "<br>" + piece

