(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          setformtolocalStorage()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()

//$('#paymentBtn').on('click', setformtolocalStorage());

//Get local storage and append it to list
// Function that gets player scores from localStorage and displays them
function getItems() {
// Check if localStorage is empty
  if(localStorage.getItem("basket") !== null) {
      // Get my localStorage which must be parsed
      var basket = JSON.parse(localStorage.getItem('basket'));
      // Sorts the values ​​from the highest price (new array)
      var sortedArray = basket.sort((obj1, obj2) => {
          return obj2.price - obj1.price;
      });

      $('#badge').text(sortedArray.length);
      // For each sorted element
      var sumBasket = 0;
      for(var i = 0; i < sortedArray.length; i++) { 
        sumBasket = sumBasket + basket[i].price;
        var item = 
        `<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">${basket[i].product}</h6>
            </div>
            <span class="text-muted">£${basket[i].price.toFixed(2)}</span>
          </li>`;
        $('.list-group').append(item);   
      }
      var total = 
          `<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">Total (GBP)</h6>
            </div>
            <span class="text-muted">£${sumBasket.toFixed(2)}</span>
          </li>`;
          $('.list-group').append(total);   
  }
}

function setformtolocalStorage() {
    // Create a basket item
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();

    localStorage.setItem('name', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
  }

getItems();