/**
 * Author: Iyassu Allen
 * Created:   11.14.2022
 *
 **/
function FizzBuzz(){
  for(i=0; i<=200; i++){
    str = "";
    if(i % 3 == 0){
      str = str + "Fizz";
      console.log(str);
      $("#output").append("<p>" + str + "</p>");
    }
    if(i % 5 == 0){
      str = str + "Buzz";
      console.log(str);
      $("#output").append("<p>" + str + "</p>");
    }
    if(i % 7 == 0){
      str = str + "Boom";
      console.log(str);
      $("#output").append("<p>" + str + "</p>");
    }
    if(str != ""){
      console.log(str);
      $("#output").append("<p>" + str + "</p>");
    }
    else{
      console.log(i);
      $("#output").append("<p>" + i + "</p>");
    }
  }
}
FizzBuzz()
