// Create a search bar in the navbar to the right of the search icon
function createSearchBar() {
  // get the search icon - and add a class 'search'
  $("#navbar-icons").children().eq(1).addClass("search");
  // prepend with a text input search box
  $(".search").prepend("<input id='searchInput'></input>");
  // get the search icon img and add id 'search-icon
  $("#navbar-icons")
    .children()
    .eq(1)
    .children()
    .eq(1)
    .attr("id", "search-icon");
  // add click event to search icon img to show/hide search bar
  $("#search-icon").on("click", function () {
    $("#searchInput").toggle();
  });
}

// Compare the user input to each product title and description, if it matches, push the product to an array
// And send the array to the displayProductCards function
function searchInput(product) {
  $("#searchInput").on("input", function (event) {
    $(".product-container").empty();
    var filteredlist = [];
    var searchInputString = event.target.value;
    for (var i = 0; i < product.length; i++) {
      searchInputString = searchInputString.toLowerCase();
      if (
        product[i].title.toLowerCase().includes(searchInputString) ||
        product[i].description.toLowerCase().includes(searchInputString)
      ) {
        filteredlist.push(product[i]);
      }
    }
    displayProductCards(filteredlist);
  });
}

// Get the category from the drop down menu click
$(".category-dropdown")
  .children()
  .on("click", (e) => {
    catergory = e.target.text;
    getProductCatergory(catergory);
  });

// Add the category to the api url call
function getProductCatergory(catergory) {
  $(".product-container").empty();
  var queryURL = "https://fakestoreapi.com/products/category/" + catergory;
  $.ajax({
    url: queryURL,
    method: "GET",
    // get the data for that category
  }).then(function (productData) {
    // display the product cards for the category
    displayProductCards(productData);
  });
}
