/**
 * Author: Iyassu Allen
 * Created:   11.21.2022
 *
 **/

 $.get("@pipedream/platform", function(data) {
   $("#myDiv").html(data);
 }).fail(function(){
   alert("There was an error");
 });

/**
 $.ajax({
     // API endpoint
     url: "http://numbers.api",
     // Any data to send
     data: { id: 123},
     // POST or GET request
     type: "GET",
     // data type we expect back
     dataType : "json",
 })

 .done(function(data) {
    console.log("Success:", data);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
});
**/
