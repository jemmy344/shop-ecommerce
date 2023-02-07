function getConverter() {
  var queryconverterURL =
    "https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000";
  $.ajax({
    method: "GET",
    url: queryconverterURL,
    headers: { "X-Api-Key": "cIjIyWC0IjyVZyex6O08pw==tm1WuKoKt4tSK2rB" },
    contentType: "application/json",
    // Show result from converter api
    success: function (result) {
      // console.log(result);
    },
    // Show errors
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

//  AJAX CALL TO GET ALL PRODUCTS
function getAllProducts() {
  var queryURL = "https://fakestoreapi.com/products/";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (productData) {
    // DISPLAY THEM ON PAGE
    displayProductCards(productData);
    // create the searchbar
    createSearchBar();
    // send api product data to searchbar, to be compared to the user search input
    searchInput(productData);
  });
}
getAllProducts();



// Displays the product information on product cards
function displayProductCards(products) {
  $(".product-container").append("<div class='row'>");
  $(".row").each(function () {
    for (var i = 0; i < products.length; i++) {
      $(".row").append(
        `<div class="card-container col-md-4 col-sm-6">
            <div class="card h-100">
              <img class="product-img" src=${
                products[i].image
              } alt="image cap"/>
              <div class="card-body d-flex flex-column">
                <h3 class='card-text card-title product-title'>${
                  products[i].title
                }</h3>
                <p class= "card-text price product-price"> £${products[
                  i
                ].price.toFixed(2)}</p>
                <p class= "card-text">${products[i].description}</p>
                <button type='button' class=' mt-auto btn-success btn add-to-basket'>Add to basket</button>
              </div>
            </div>
         </div>`
      );
    }
  });

  $(".product-img").css({
    margin: "10% auto",
    height: "50%",
    width: "60%",
    "object-fit": "fit",
  });

  $(".card").css({ margin: "3%", "border-bottom": "none" });

  $(".btn").css({ width: "70%", margin: "0 auto" });

  $(".add-to-basket").on("click", function () {
    var productTitle = $(this).siblings(".product-title").text();
    var productPrice = $(this).siblings(".product-price").text();
    addtoBasket(productTitle, productPrice);

    // Function to add the product to a basket, and send to localStorage
    function addtoBasket(productTitle, productPrice) {
      // Create a basket
      var basketArray = [];
      // Create a basket item
      var basketItem = {
        product: productTitle,
        price: productPrice,
      };

      // Create my object that we push to localStorage
      // If a basket is empty, it won't be in local storage
      if (localStorage.getItem("basket") === null) {
        // put the item in the basket
        basketArray.push(basketItem);
        // send the basket to localStorage
        localStorage.setItem("basket", JSON.stringify(basketArray));
      } else {
        //  the basket is already in localStorage, basketArray becomes the basket in the localStorage using parse
        basketArray = JSON.parse(localStorage.getItem("basket"));
        // put the new item in the basket
        basketArray.push(basketItem);
        // return the basket to localStorage
        localStorage.setItem("basket", JSON.stringify(basketArray));
      }
    }
  });
}
