/**
 * Author: Iyassu Allen
 * Created:   10.24.2022
 *
 **/

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

//output
document.writeln("This is how to say your name in robot: ", sortUserName(), "</br>");
