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
  console.log(data);
}

loadCategories(); // calling the above function

// Function declaration for getting the data from data.json(places) and assign it to the _places array
// MADE  BY  ALL
async function loadPlaces() {
  const url = _dataUrl; // get the link to json file
  const response = await fetch(url); // wait for the response
  const data = await response.json(); // wait for data
  _places = data; // assign the data to the _places array
  console.log(data);
  appendPlaces(_places);
}

loadPlaces();

function getImageUrl(place) {
  if (place.Files.length >= 1) {
    return place.Files[0].Uri;
  } else if (place.Files.length < 1) {
    return (url = "../media/aarhus2.jpg");
  }
}

// Function to append the places to the DOM
function appendPlaces(_places) {
  const placesCards = document.querySelector(".places_cards_container"); // selecting from the HTML the container which will hold the freelancers cards

  let html = "";
  for (const place of _places) {
    html += /*html*/ `
      <a onclick="selectPlace(${place.id})">
        <div class="place_card">
          <div class="request-image">
            <img src="${getImageUrl(place)}">
          <div class="request-text">
            <img src="../icons/location.png">
            <address class="address">"${place.Address.AddressLine1}"</address>
          </div>
          <div>"${place.Category.Name}</div>
        </div>
      </a>
    `;
  }
  placesCards.innerHTML = html;
}
