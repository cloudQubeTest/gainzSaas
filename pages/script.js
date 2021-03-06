function initXHR(x, value) {
	console.log(x); 
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "none";
	}
	else if (x == 'recipes') {
		//		retrieveActiveRecipesFromServer('/app/json/recipes.json');
		retrieveActiveRecipesFromServer('/app/recipe/', 'recipes');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "block";
		document.getElementById("sRecipe").style.display = "none";		
	}
	else if (x == 'sRecipe') {
		retrieveActiveRecipesFromServer('/app/recipe/' + value, 'sRecipe');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "block";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "none";
	}
}

function retrieveActiveRecipesFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "recipes") {
				populateRecipesView('recipes', returnValues);
			}
			else if (operation == "sRecipe") {
				populateReceipeDetails('details', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populateRecipesView(elementId, recipes) {
	var element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Active Recipes</h3>";

	for (var i = 0; i < recipes.length; i++) {
		newElement += "<div class=\"panel panel-default\">";
		newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:initXHR('sRecipe'," +  (i+1) + ")\">" + (i + 1) + ". " + recipes[i].recipeTitle + "</a></h4>";
		newElement += "<div class=\"panel-body\">";
		newElement += "<p>" + recipes[i].ingredients  + "</p>";
		newElement += "</div>";
		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
		newElement += "<tbody>";
		newElement += "<tr>";
		newElement += "<td>Due: <span>" + recipes[i].calories + "</span></td>";
		newElement += "<td align=\"right\">Items: <span class=\"badge\">" + recipes[i].fat + "</span></td>";
		newElement += "</tr>";
		newElement += "</tbody>";
		newElement += "</table>";
		newElement += "</div>";
	}

	element.innerHTML = newElement;
}

//DOM based function
function populateReceipeDetails(elementId, recipe) {
	var element = document.getElementById(elementId);
	var newElement = "";

		newElement += "<tr>";
		newElement += "<td>" + recipe.instructions + "</td>";
		newElement += "<td><span class=\"badge\">" + recipe.sugar + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";

	element.innerHTML = newElement;	
}

//JQuery based function
function populateListItems2(elementId, recipe) {
	var newElement = "";
		newElement += "<tr>";
		newElement += "<td>" + recipe.instructions + "</td>";
		newElement += "<td><span class=\"badge\">" + recipe.carbs + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	$("#" + elementId).append(newElement);
}
