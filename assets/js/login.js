// A hardcoded user
var hard_user = "hudogriz";
var hard_pass = "1234tvojamama";

document.addEventListener('DOMContentLoaded', function(event){

  //Change the validity text for elements (email gets a different one than others)
  var elements = document.getElementsByTagName('input');
  for (var i=0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid)
        e.target.setCustomValidity("Tu še moreš nika napisat.");
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    }
  }
});

// Checks if the user performed a valid login
function login() {
  var username = document.getElementById('input-username').value.toLowerCase();
  var password = document.getElementById('input-password').value;
  if (username == hard_user) {
    if (password == hard_pass) {
      window.location.href = "overview.html";
    } else {
      // TODO inform user that "Geslo in uporabniško ime se ne ujemata"
      console.log("Try again.");
    }
  } else {
    // TODO inform user that "Geslo in uporabniško ime se ne ujemata"
    console.log("Try again.");
  }
}

// Open the forgotten password modal
function forgot_password() {
  var modal = document.getElementById('modal');
  var content = document.getElementById('modal-content');

  content.innerHTML = '<p>Trenutno je samo en uporabnik (hudogriz:1234tvojamama)</p>'
                        + '<p style="font-size: 10pt;">(kliknite da zaprete okno)</p>';
  modal.style.display = 'block';

  modal.onclick = function(e) {
    modal.style.display = 'none';
  }
}
