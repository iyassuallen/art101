/**
 * Author: Iyassu Allen
 * Created:   11.2.2022
 *
 **/

//variables
function sortUserName(){
  var userName = window.prompt("Please tell me your name: ");
  //split into name array
  var nameArray = userName.split('');
  //sort name array
  var nameArraySort = nameArray.sort();
  //join name array
  var nameSorted = nameArraySort.join('');

  return nameSorted
}

var outputEl = document.getElementById("output");

var button = document.getElementById('my-button');

button.addEventListener('click', function() {
    inputValue = document.getElementById('my-input').value;
    console.log("Your input:", sortUserName(inputValue));
    outputEl.innerHTML = sortUserName(inputValue);
});
