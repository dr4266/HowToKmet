document.addEventListener("DOMContentLoaded", function(event){

  // Relocate the page if the user clicks on the cancel button
  var cancelButton = document.getElementById('cancelButton');
  var title = document.getElementsByClassName('header-main')[0].innerHTML.trim();

  cancelButton.addEventListener('click', function(event){
    if (title == 'Posodabljanje opravila') {
      window.location = 'view-task.html';
    }
    else if (title == 'Posodabljanje živali')
      window.location = 'view-animal.html';
  });


  // add html according to type selected
  document.getElementById('type-select').addEventListener("change", function() {
    var index = this.selectedIndex;
    var type = this.children[index].value;
    var div = document.getElementById('additional-data');
    if (div) {
      switch (type) {
        case 'animals':
          div.innerHTML = '<label for="additional" class="label-transparent">Izberite žival</label><select id="additional-select" class="grey-border" name="adittional"><option value="1256">Liska</option><option value="2232">Sernelovka</option><option value="3987">Šeka</option><option value="3445">Stanč</option></select>';
          break;
        case 'property':
          div.innerHTML = '<label for="additional" class="label-transparent">Izberite posest</label>        <select id="additional-select" class="grey-border" name="additional"><option value="43768934">Prihušnica</option><option value="23980600">Črešnarjevo</option><option value="29385023">Vinograd pri Svetem Jerneju</option><option value="32985002">Travnik Zafošt</option><option value="29468029">Dobruva</option></select>';
          break;
        default:
          div.innerHTML = '<label for="additional" class="label-transparent">Svoj tip</label>\
          <input class="input-transparent grey-border" type="text" name="additional" value="">'
      }
    }
  });
});
