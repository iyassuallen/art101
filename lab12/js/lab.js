/**
 * Author: Iyassu Allen
 * Created:   11.9.2022
 *
 **/

function sortHat(str){
  var strLength = str.length;
  var mod = strLength % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  if (mod == 1){
    return "Ravenclaw";
  }
  if (mod == 2){
    return "Slytherin";
  }
  if (mod == 3){
    return "Hufflepuff";
  }
}

var button = document.getElementById("button");
button.addEventListener('click', function() {
    var inputValue = document.getElementById('input').value;
    var house = sortHat(inputValue);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});

/**
$("#button").click(function() {
  var inputName = $('input').value;
  var house = sortHat(inputName);
  $("#output").append("<p> The Sorting Hat has sorted you into " + house + "</p>");
});
**/
