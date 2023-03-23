$('#myCarousel').carousel({
    interval: false
  });




$(document).ready(function() {
    // Initialize the input value to 0
    var days = 0;
    $("#days-input").val(days);
  
    // Handle the click event for the plus button
    $("#plus-btn").click(function() {
      days++;
      $("#days-input").val(days);
    });
  
    // Handle the click event for the minus button
    $("#minus-btn").click(function() {
      if (days > 0) {
        days--;
        $("#days-input").val(days);
      }
    });
  });

  var days = 5; // change this value to the desired number of days

  for (var i = 1; i <= days; i++) {
    var slider = $('<input type="range" min="6" max="24" value="6" class="custom-range" id="day' + i + '">');
    var label = $('<label for="day' + i + '">Day ' + i + '</label>');
    var div = $('<div class="form-group"></div>');
    div.append(label);
    div.append(slider);
    $('#sliders').append(div);
  }