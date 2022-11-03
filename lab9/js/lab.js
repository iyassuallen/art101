/**
 * Author: Iyassu Allen
 * Created:   10.31.2022
 *
 **/

//variables
var outputEl = getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("e");

new1El.innerHTML = "This is something new.";
new2El.innerHTML = "Iyassu was here.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
