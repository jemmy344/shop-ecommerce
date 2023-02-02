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
          `<div class="card-container col-md-4 col-sm-6">
              <div class="card h-100">
                <img class="product-img" src=${
                  products[i].image
                } alt="image cap"/>
                <div class="card-body d-flex flex-column">
                  <h3 class='card-text card-title'>${products[i].title}</h3>
                  <p class= "card-text price"> £${products[i].price.toFixed(
                    2
                  )}</p>
                  <p class= "card-text">${products[i].description}</p>
                  <button type='button' class=' mt-auto btn-primary btn'>Add to basket</button>
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

    // $(".card-text").css({ "flex-grow": "1" });
    $(".checkout-btn").on("click", function (event) {
      console.log($(this.title));
    });
  });
}

getAllProducts();
