/**
 * Author: Iyassu Allen
 * Created:   10.22.2022
 *
 **/

 myTransport = ["Bus", "Walking"];
 //variables
 myMainRide = {make: "Ford",
 model: "Taurus",
 color: "Rusty",
 year: 1995};

 //calculate age
 //age = 2022 - year;

//myTransport
document.writeln("Getting around: " + myTransport + "<br>");

//myMainRide
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "<pre>");
