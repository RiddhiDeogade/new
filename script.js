// TODO: STEP 0: Declare a variable to store the random category short name
var randomCategoryShortName = "";

// TODO: STEP 1: Create a function to generate a random category short name
function getRandomCategory() {
  var categories = ["Lunch", "Dinner", "Sushi", /* Add more categories as needed */];
  var randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

// TODO: STEP 2: Assign the random category short name to the variable
randomCategoryShortName = getRandomCategory();

// TODO: STEP 3: Modify the onclick attribute to use the random category short name
document.getElementById("specials-link").setAttribute("onclick", "$dc.loadMenuItems('" + randomCategoryShortName + "');");

// TODO: STEP 4: Modify the onclick attribute to reset the random category short name
document.querySelector(".navbar-brand").setAttribute("onclick", "randomCategoryShortName=''; $dc.loadMenuCategories();");
