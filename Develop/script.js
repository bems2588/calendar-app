
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("dddd MMM Do YY");

const saveBtn = document.querySelectorAll(".saveBtn");


// save description
$(".saveBtn").on("click", function () {
  var saveDescription = $(this).siblings(".description").val().trim();
  localStorage.setItem($(this).siblings(".hour").attr("id"), saveDescription);
});


// get descriptions and loads them
var loadDescriptions = function () {
  var innerNine = localStorage.getItem("9");
  $("#9").siblings(".description").val(innerNine);
  var innerTen = localStorage.getItem("10");
  $("#10").siblings(".description").val(innerTen);
  var innerEleven = localStorage.getItem("11");
  $("#11").siblings(".description").val(innerEleven);
  var innerTwelve = localStorage.getItem("12");
  $("#12").siblings(".description").val(innerTwelve);
  var innerThirt = localStorage.getItem("13");
  $("#13").siblings(".description").val(innerThirt);
  var innerFourt = localStorage.getItem("14");
  $("#14").siblings(".description").val(innerFourt);
  var innerFift = localStorage.getItem("15");
  $("#15").siblings(".description").val(innerFift);
  var innerSixT = localStorage.getItem("16");
  $("#16").siblings(".description").val(innerSixT);
  var innerSevenT = localStorage.getItem("17");
  $("#17").siblings(".description").val(innerSevenT);
};

// get current hour
currentHour = moment().hours();

// set styles - gets each div with the class hour
$(".hour").each(function () {
  // takes value of .hour class id and sets it to a variable rowHour
  rowHour = $(this).attr("id");

  // sets .hour class to past if that rowHour is less than currentHour
  if (rowHour < currentHour) {
    $(this).siblings(".description").addClass("past");
    $(this).siblings(".description").removeClass("future");
    $(this).siblings(".description").removeClass("present");
  }

  // sets .hour class to present if that rowHour is equal to currentHour
  if (rowHour == currentHour) {
    $(this).siblings(".description").addClass("present");
    $(this).siblings(".description").removeClass("past");
    $(this).siblings(".description").removeClass("future");
  }

  // sets .hour class to future if that rowHour is greater than currentHour
  if (rowHour > currentHour) {
    $(this).siblings(".description").addClass("future");
    $(this).siblings(".description").removeClass("past");
    $(this).siblings(".description").removeClass("present");
  }
});

// load the descriptions
loadDescriptions();


