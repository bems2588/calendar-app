
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("dddd MMM Do YY");

const saveBtn = document.querySelectorAll(".saveBtn");


// save description
$(".saveBtn").on("click", function () {
  var saveDescription = $(this).siblings(".description").val().trim();
  localStorage.setItem($(this).siblings(".hour").attr("id"), saveDescription);
});


var currentHour = moment().format('HH');

$(".hour").each(function () {
  rowHour = $(this).attr("id");
})
//extract the value and save it 
//which fields are open and which ones are grey

//set task in open 

//event listener onClick

//store value in a variable

//disable box by turning it red

//then work with local storage object

//     ---------------

//Check in class activities

//activity number one event listener
// module 5 script js - set and get items