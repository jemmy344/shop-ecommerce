var queryURL = "https://fakestoreapi.com/products";
function getAllProducts() {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (products) {
    // console.log(products);
    for (var i = 0; i < products.length; i++) {
      // if (i % 3 === 0) {
      //   $(".container").append("<div class='row'>");
      // }
    }

    $(".row").each(function () {
      for (var i = 0; i < products.length; i++) {
        // change 9am to 09am for string comparison
        $(".row").append(
          '<div class="card" col-3 style="width:20vw"><h3>' +
            products[i].title +
            '<h3><img class="card-img-top style="height:20px" src="' +
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
