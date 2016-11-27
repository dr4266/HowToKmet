var data = new Array(3);
data[0] = "tasks,50,#47BAC1";      //algasta #47BAC1
data[1] = "animals,23,#15A4FA";     //modra #15A4FA
data[2] = "properties,30,#AE69AF"; //vijolcna #AE69AF

document.addEventListener('DOMContentLoaded', function(event){
  //draw the graph
  var graph_total = document.getElementById('graph-total');

  if (graph_total && graph_total.getContext) {
    var context = graph_total.getContext('2d');
    drawBarChart(context, data, 50, 30, (graph_total.height-20), 20);
  }

  //get the user location
  getLocation();
});

function getLocation() {
  var loc = navigator.geolocation;
  var weather = document.getElementsByClassName('weather')[0];
  if (loc) {
    loc.getCurrentPosition(printCoordinates, printError);
  } else {
    weather.innerHTML = 'Geo lokacija trenutno ni podprta';
  }
}

function printCoordinates(position) {
  var weather = document.getElementsByClassName('weather')[0];
  weather.innerHTML += "<br \\>Vaša lokacija: \
                        <br \\>Dolžina: " + position.coords.longitude +
                        "<br \\>Širina: " + position.coords.latitude;

}

function printError(error) {
  var weather = document.getElementsByClassName('weather')[0];
  switch(error.code) {
      case error.PERMISSION_DENIED:
          weather.innerHTML = "Uporabnik ne dovoli lokacije"
          break;
      case error.POSITION_UNAVAILABLE:
          weather.innerHTML = "Podatki o lokaciji niso na voljo."
          break;
      case error.TIMEOUT:
          weather.innerHTML = "Zahteva po lokaciji je presegla časovno omejitev."
          break;
      case error.UNKNOWN_ERROR:
          weather.innerHTML = "Prišlo je do neznane napake."
          break;
  }
}

function drawBarChart(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
  // Draw the x and y axes
  context.lineWidth = "1.0";
  var startY = 0;
  context.lineWidth = "0.0";
  var maxValue = 0;
  for (var i=0; i < data.length; i++) {
    // Extract the data
    var spacing = i * 30;
    var values = data[i].split(",");
    var name = values[0];
    var height = parseInt(values[1]);
    var filling = values[2]
    if (parseInt(height) > parseInt(maxValue))
      maxValue = height;

    // Write the data to the chart
    context.fillStyle = filling;
    drawRectangle(context,startX + (i * barWidth)+ spacing,(chartHeight - height),barWidth,height,true);
    // Add the column title to the x-axis
    context.textAlign = "left";
    context.fillStyle = "#000";
    context.fillText(name, startX + (i * barWidth) + spacing, chartHeight + 10, 200);
  }
  // Add some data markers to the y-axis
  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
  context.textAlign = "right";
  context.fillStyle = "#000";
  var markerValue = 0;
  for (var i=0; i < numMarkers; i++) {
    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
    markerValue += markDataIncrementsIn;
  }
}

// drawLine - draws a line on a canvas context from the start point to the end point
function drawLine(contextO, startx, starty, endx, endy) {
  contextO.beginPath();
  contextO.moveTo(startx, starty);
  contextO.lineTo(endx, endy);
  contextO.closePath();
  contextO.stroke();
}

// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
function drawRectangle(contextO, x, y, w, h, fill) {
  contextO.beginPath();
  contextO.rect(x, y, w, h);
  contextO.closePath();
  contextO.stroke();
  if (fill) contextO.fill();
}
