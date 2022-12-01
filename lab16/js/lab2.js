/**
 * Author: Iyassu Allen
 * Created:   11.21.2022
 *
 **/
// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://swapi.dev/api/films/1/",
  // The data to send (will be converted to a query string)
  data: {
    // here is where any data required by the api
    //   goes (check the api docs)
    id: 1,
    api_key: "blahblahblah",
  },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType: "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
    // do stuff
    console.log(data);
  },
  // What we do if the api call fails
  error: function(jqXHR, textStatus, errorThrown) {
    // do stuff
    console.log("Error:", textStatus, errorThrown);
  }
})

var comicObj = $.ajax();

$("#activate").click(function() {
  $("#output").html(JSON.stringify(comicObj))
});