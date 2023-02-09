function getConverter(currencyChangeFrom, currencyChangeTo, amount) {
  var queryconverterURL =
    "https://api.api-ninjas.com/v1/convertcurrency?want=" +
    currencyChangeFrom +
    "&have=" +
    currencyChangeTo +
    "&amount=" +
    amount;
  $.ajax({
    method: "GET",
    url: queryconverterURL,
    headers: { "X-Api-Key": "cIjIyWC0IjyVZyex6O08pw==tm1WuKoKt4tSK2rB" },
    contentType: "application/json",
    // Show result from converter api
    success: function (result) {
      console.log(result.new_amount);
      $(".currency-output").text(result.new_amount);
    },
    // Show errors
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

// Click on the drop down, and select a currency to change from.
$(".currency-from")
  .children()
  .on("click", (event) => {
    // Gets the currency text, and changes the dropdown title to the currency
    currencyChangeFrom = event.target.id;
    $(".currency-from-title").text(currencyChangeFrom);
  });

// Click on the drop down, and select a currency to change to.
$(".currency-to")
  .children()
  .on("click", (event) => {
    // Get the typed amount
    amount = $(".currencyInput").val();
    // Get the chosen currency
    var currencyChangeTo = event.target.id;
    $(".currency-to-title").text(currencyChangeTo);
    currencyChangeFrom = $(".currency-from-title").text();
    getConverter(currencyChangeFrom, currencyChangeTo, amount);
  });
