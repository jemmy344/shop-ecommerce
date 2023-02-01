var queryURL = "https://fakestoreapi.com/products";
function getAllProducts() {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (products) {
    $(".container").append("<div class='row'>");

    $(".row").each(function () {
      for (var i = 0; i < products.length; i++) {
        // change 9am to 09am for string comparison
        $(".row").append(
          '<div class="col-md-4 col-sm-6" ><div class="card"><h3>' +
            products[i].title +
            '</h3><img class="card-img-top product-img" src="' +
            products[i].image +
            '" alt="Card image cap"/><p class= "price"> £' +
            products[i].price +
            '</p><p class= "description" style="font-size:1rem">' +
            products[i].description +
            "</p><button type='button' class='btn btn-primary'>Primary</button></div></div>"
        );
      }
    });
  });
}
getAllProducts();
