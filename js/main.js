const _categoryUrl = "./json/categories.json"; // link to categories.json
const _dataUrl = "./json/data.json"; // link to data.json

// CREATING DEFAULT LINK VARIABLES
// AND HEADERS
let _selectedCategoryId; // global variable used to select the clicked category in selectCategory() function
let _selectedPlaceId; // global variable used to select the clicked place in selectPlace() function
let _categories = []; // empty categories array which is assigned all the data after feetching the json file
let _places = []; // empty places array which is assigned all the data after fetching data json
let _filteredPlaces = [];

// Function declaration for getting the data from categories.json and display them on the screen
async function loadCategories() {
  const url = _categoryUrl; // get the link to json file
  const response = await fetch(url); // wait for the response
  const data = await response.json(); // wait for data
  _categories = data; // assign the data to the _categories array
  appendCategories(_categories); // call function to display categories to DOM
}

loadCategories(); // calling the above function

// Function declaration for getting the data from data.json(places) and assign it to the _places array
// MADE  BY  ALL
async function loadPlaces() {
  const url = _dataUrl; // get the link to json file
  const response = await fetch(url); // wait for the response
  const data = await response.json(); // wait for data
  _places = data; // assign the data to the _places array
}

loadPlaces();
