/**
 * Author: Iyassu Allen
 * Created:   11.7.2022
 *
 **/

$("#Challengebutton").click(function() {
  $("#Challenges").toggleClass("special");
  $("#Problemsbutton").css({color: 'green'});
});

$("#Problemsbutton").click(function() {
  $("#Problems").toggleClass("special");
  $("#Challengebutton").css({color: 'red'});
});

$("#Resultsbutton").click(function() {
  $("#Results").toggleClass("special");
  $("#Resultsbutton").css({color: 'blue'});
});
