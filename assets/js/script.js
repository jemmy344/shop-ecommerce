var queryURL = "https://fakestoreapi.com/products";
function getAllProducts() {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (products) {
    $(".product-container").append("<div class='row'>");

    $(".row").each(function () {
      for (var i = 0; i < products.length; i++) {
        // change 9am to 09am for string comparison
        $(".row").append(
          '<div class="col-md-4 col-sm-6" ><div class="card h-100"><div class="card-body"><img class=" product-img" src="' +
            products[i].image +
            '" alt="image cap"/><h3 card-title>' +
            products[i].title +
            '</h3><p class= "price"> £' +
            products[i].price.toFixed(2) +
            '</p><p class= "card-text ">' +
            products[i].description +
            "</p><button type='button' class='btn btn-primary checkout-btn'>Primary</button></div></div>"
        );
      }
    });
    
    $(".product-img").css({ width: "60%", margin: "10%" });
    $(".checkout-btn").on("click", function (event) {
      console.log($(this.title));
    });
  });
}

getAllProducts();
