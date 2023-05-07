// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var displayEl = $("#hoursContainer");
var today = dayjs();
$("#todayEl").text(today);

function renderHoursContainer() {
  var hours = [
    {convFormat: '1 AM', format24: "01"},
    {convFormat: '2 AM', format24: "02"},
    {convFormat: '3 AM', format24: "03"},
    {convFormat: '4 AM', format24: "04"},
    {convFormat: '5 AM', format24: "05"},
    {convFormat: '6 AM', format24: "06"},
    {convFormat: '7 AM', format24: "07"},
    {convFormat: '8 AM', format24: "08"},
    {convFormat: '9 AM', format24: "09"},
    {convFormat: '10 AM', format24: "10"},
    {convFormat: '11 AM', format24: "11"},
    {convFormat: '12 PM', format24: "12"},
    {convFormat: '1 PM', format24: "13"},
    {convFormat: '2 PM', format24: "14"},
    {convFormat: '3 PM', format24: "15"},
    {convFormat: '4 PM', format24: "16"},
    {convFormat: '5 PM', format24: "17"},
    {convFormat: '6 PM', format24: "18"},
    {convFormat: '7 PM', format24: "19"},
    {convFormat: '8 PM', format24: "20"},
    {convFormat: '9 PM', format24: "21"},
    {convFormat: '10 PM', format24: "22"},
    {convFormat: '11 PM', format24: "23"},
    {convFormat: '12 AM', format24: "24"},    
  ];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < hours.length; i++) {    

    if(today.format("HH")-4 < hours[i].format24 && hours[i].format24-8 < today.format("HH")){
    var hourDivCont = $('<div>');
    hourDivCont.addClass("row time-block")
    displayEl.append(hourDivCont);
    // Create button
    var hourDiv = $('<div>');
    // Assign style to the button
    hourDiv.addClass('col-2 col-md-1 hour text-center py-3');
    hourDiv.rows = "3";    
    // Assign the letter to the data-letter attribute
    // Display the letter
    hourDiv.text(hours[i].convFormat);
    // Attach the letter element
    hourDivCont.append(hourDiv);

    var hourtextarea = $("<textarea>")
    var Hrs2 = hours[i].convFormat; 
    hourtextarea.attr('id', Hrs2);
    hourtextarea.addClass("col-8 col-md-10 description")
    hourtextarea.text("");
    hourDivCont.append(hourtextarea);


    var hourbutton = $("<button>")
    var Hrs = hours[i].convFormat; 
    hourbutton.attr('id', Hrs);
    hourbutton.addClass("btn saveBtn col-2 col-md-1")
    hourDivCont.append(hourbutton);

    if (today.format("HH") === hours[i].format24){
      hourDivCont.addClass("present");
      }else if
      (today.format("HH") < hours[i].format24)
      {
        hourDivCont.addClass("future");
      }else{
        hourDivCont.addClass("past");
      }
  }

  displayEl.on('click', ".btn", function (event) {
    event.preventDefault();
    console.log("Hello");
    var displayHrs = $(this).siblings('.description').val();
    var keyHrs = $(event.target).attr('id'); 
    localStorage.setItem(keyHrs, displayHrs)
  });

    $("#5 PM").val(localStorage.getItem("5 PM"));
    $("#6 PM").val(localStorage.getItem("6 PM"));
    $("#7 PM").val(localStorage.getItem("7 PM"));
    $("#8 PM").val(localStorage.getItem("8 PM"));


}
}



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

renderHoursContainer();




