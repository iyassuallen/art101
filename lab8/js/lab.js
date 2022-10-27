/**
 * Author: Iyassu Allen
 * Created:   10.26.2022
 *
 **/

//variables
numArray = [2, 16, 8, 22, -9, 3.6];

function sqr(x) {
    var results = Math.pow(x, 2);
    return results;
}

//array map
var result = numArray.map(sqr);

//anon function
var result = numArray.map (function(x) {
    return Math.pow(x, 2);
})


//output
console.log("Square of array: ", result);
