// get the search icon - and add a class 'search'
$("#navbar-icons").children().eq(1).addClass("search");
// prepend with a text input search box
$(".search").prepend("<input id='searchInput'></input>");
// get the search icon img and add id 'search-icon
$("#navbar-icons").children().eq(1).children().eq(1).attr("id", "search-icon");
// add click event to search icon img to show/hide search bar
$("#search-icon").on("click", function () {
  $("#searchInput").toggle();
});

// TODO: Create a smooth animation

// When a user does a search console.log(search), when enter is pressed
$("#searchInput").on("keypress", function (event) {
  if (event.key === "Enter") {
    console.log($("#searchInput").val());
    console.log(getAllProducts());
  }
});
