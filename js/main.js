const _categoryUrl = "./json/categories.json"; // link to categories.json
const _dataUrl = "./json/data.json"; // link to data.json

// CREATING DEFAULT LINK VARIABLES
// AND HEADERS
let _selectedCategoryId; // global variable used to select the clicked category in selectCategory() function
let _selectedPlaceId; // global variable used to select the clicked place in selectPlace() function
let _categories = []; // empty categories array which is assigned all the data after feetching the json file
let _places = []; // empty places array which is assigned all the data after fetching data json
let _filteredPlaces = [];

// Function declaration for getting the data from data.json(places) and assign it to the _places array
// MADE  BY  ALL
async function loadPlaces() {
  const url = _dataUrl; // get the link to json file
  const response = await fetch(url); // wait for the response
  const data = await response.json(); // wait for data
  _places = data; // assign the data to the _places array
  appendPlacesToEat(_places);
  appendAttractions(_places);
  appendEvents(_places);
  appendActivities(_places);
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
function appendPlacesToEat(_places) {
  const placesCards = document.querySelector(".eat_cards_container"); // selecting from the HTML the container which will hold the freelancers cards

  let html = "";
  for (const place of _places) {
    if (place.MainCategory.Id === 62) {
      html += /*html*/ `
      <a onclick="selectPlace(${place.id})">
      <div class="places_card_container">
        <div class="request-image">
            <img src="${getImageUrl(place)}">
        </div>
        <div class="place_card">
        <h3 class="place_name">${place.Name}</h3>
          <div class="request-text">
            <img class="label_icon" src="../icons/location.png">
            <address class="address">${place.Address.AddressLine1}<br>${
        place.Address.PostalCode
      } ${place.Address.City}</address>
          </div>
         <div class="subcategory_container">
          <img class="label_icon" src="../icons/label.png">
          <p class="card_category_name">${place.Category.Name}</p>
          </div>
        </div>
        </div>
      </a>
    `;
    }
    placesCards.innerHTML = html;
  }
}

// Function to append the places to the DOM
function appendAttractions(_places) {
  const placesCards = document.querySelector(".attractions_cards_container"); // selecting from the HTML the container which will hold the freelancers cards

  let html = "";
  for (const place of _places) {
    if (place.MainCategory.Id === 3) {
      html += /*html*/ `
      <a onclick="selectPlace(${place.id})">
      <div class="places_card_container">
        <div class="request-image">
            <img src="${getImageUrl(place)}">
        </div>
        <div class="place_card">
        <h3 class="place_name">${place.Name}</h3>
          <div class="request-text">
            <img class="label_icon" src="../icons/location.png">
            <address class="address">${place.Address.AddressLine1}<br>${
        place.Address.PostalCode
      } ${place.Address.City}</address>
          </div>
         <div class="subcategory_container">
          <img class="label_icon" src="../icons/label.png">
          <p class="card_category_name">${place.Category.Name}</p>
          </div>
        </div>
        </div>
      </a>
    `;
    }
    placesCards.innerHTML = html;
  }
}

function appendEvents(_places) {
  const placesCards = document.querySelector(".events_cards_container"); // selecting from the HTML the container which will hold the freelancers cards

  let html = "";
  for (const place of _places) {
    if (place.MainCategory.Id === 58) {
      html += /*html*/ `
      <a onclick="selectPlace(${place.id})">
      <div class="places_card_container">
        <div class="request-image">
            <img src="${getImageUrl(place)}">
        </div>
        <div class="place_card">
        <h3 class="place_name">${place.Name}</h3>
          <div class="request-text">
            <img class="label_icon" src="../icons/location.png">
            <address class="address">${place.Address.AddressLine1}<br>${
        place.Address.PostalCode
      } ${place.Address.City}</address>
          </div>
         <div class="subcategory_container">
          <img class="label_icon" src="../icons/label.png">
          <p class="card_category_name">${place.Category.Name}</p>
          </div>
        </div>
        </div>
      </a>
    `;
    }
    placesCards.innerHTML = html;
  }
}

function appendActivities(_places) {
  const placesCards = document.querySelector(".activities_cards_container"); // selecting from the HTML the container which will hold the freelancers cards

  let html = "";
  for (const place of _places) {
    if (place.MainCategory.Id === 36) {
      html += /*html*/ `
      <a onclick="selectPlace(${place.id})">
      <div class="places_card_container">
        <div class="request-image">
            <img src="${getImageUrl(place)}">
        </div>
        <div class="place_card">
        <h3 class="place_name">${place.Name}</h3>
          <div class="request-text">
            <img class="label_icon" src="../icons/location.png">
            <address class="address">${place.Address.AddressLine1}<br>${
        place.Address.PostalCode
      } ${place.Address.City}</address>
          </div>
         <div class="subcategory_container">
          <img class="label_icon" src="../icons/label.png">
          <p class="card_category_name">${place.Category.Name}</p>
          </div>
        </div>
        </div>
      </a>
    `;
    }
    placesCards.innerHTML = html;
  }
}
