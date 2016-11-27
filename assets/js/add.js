//current hardcoded options
var animals = new Array(4);
animals[0] = '1256,Liska';
animals[1] = '2232,Sernelovka'
animals[2] = '3987,Šeka';
animals[3] = '3445,Stanč';
var properties = new Array(5);
properties[0] = '43768934,Prihušnica';
properties[1] = '23980600,Črešnarjevo';
properties[2] = '29385023,Vinograd pri Svetem Jerneju';
properties[3] = '32985002,Travnik Zafošt';
properties[4] = '29468029,Dobruva';


document.addEventListener('DOMContentLoaded', function(event){
  // add html according to type selected
  document.getElementById('type-select').addEventListener("change", function() {
    var index = this.selectedIndex;
    var type = this.children[index].value;
    var div = document.getElementById('additional-data');
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
  });
});

// http://rkg.gov.si/GERK/WebViewer/#map_x=500000&map_y=100000&map_sc=1828571&feature=GERK_SDO: +GERK_PID
