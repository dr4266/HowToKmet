// Collection of jokes
var json_data = {
  "jokes": [
  {"kek": "\"Janezek, kje si bil včeraj?\"\n\"Kravo sem peljal k biku.\"\n\"Kaj ni za tako delo očka boljši?\"\n\"Ne. Bik je boljši.\""},
  {"kek": "Dve kmetici pulita korenje na njivi. Prva izpuli velik koren, ga pokaže drugi in reče:\n\"Takega ima pa moj Franci.\"\n\"A tako velikega?\"\n\"Ne, tako umazanega.\""},
  {"kek": "\"Kako se vam lahko oddolžim, ker sem povozil vašega petelina?\"\n\"Nič lažjega. Vsako jutro ob 5. uri pridite k meni in mi pod oknom trikrat zakikirikajte!\""},
  {"kek": "Kmeta se pogovarjata:\n\"Če si hočeš zgraditi veliko kmetijo, moraš garati.\"\n\"Jaz sem se ravnal po drugem načelu.\"\n\"Kakšnem?\"\n\"Kmetijo sem visoko zavaroval, potem pa jo nizko prižgal.\""}
  ]
};

document.addEventListener('DOMContentLoaded', function(event){

  // Display a random joke from the json
  var kek_of_the_day = document.getElementById('kek-joke');
  var rndm = Math.floor(Math.random() * 4);
  kek_of_the_day.textContent = json_data.jokes[rndm].kek;

  //Change the validity text for elements (email gets a different one than others)
  var elements = document.getElementsByTagName('input');
  for (var i=0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (e.target.type == 'email')
        e.target.setCustomValidity("Pravi mail z @ in domena prosim.");
      else {
        if (!e.target.validity.valid) {
          e.target.setCustomValidity("Tu se mores nika napisat.");
        }
      }
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    }
  }
});

// Handle the registration
function register() {
	var name = document.getElementById('input-name').value;
	var surname = document.getElementById('input-surname').value;
	var username = document.getElementById('input-username').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var password_check = document.getElementById('input-password-check').value;
	var statistics = document.getElementById('input-statistics').checked;

  var modal = document.getElementById('modal');
  var content = document.getElementById('modal-content');
  content.innerHTML =  '<p>Successfully registered ' + name + ' ' + surname +  '</p>'
                          + '<p style="font-size: 10pt;">(kliknite da zaprete okno)</p>';
  modal.style.display = 'block';

  modal.onclick = function() {
    modal.style.display = 'none';
  }
}
