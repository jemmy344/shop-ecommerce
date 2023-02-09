function showlocalstorage() {
    var name = localStorage.getItem('name');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');

   var message = 
            `
              <h1>Payment Success !</h1>
              <p>Thanks ${name + " " + lastName} Your items will be shipped as fast as we possibly can!</p>
              <p>Check your confirmation email at : ${email}</p>
              <a href="index.html">Go to Home</a>
            `;
            $('.content').append(message);
}

showlocalstorage();