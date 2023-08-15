const presentHour = dayjs().format("H");
var timediv = $('.time-block')
var hourtextdescription = $(".description");
var saveButton = $(".saveBtn");

var presentDate = $('#todayEl');
var today = dayjs().format("dddd, MMMM D");
presentDate.text(today);

saveButton.on("click", function (e) {
  e.preventDefault();
  var parentEl = e.target.parentElement;
  var parentId = parentEl.id;

  var parentElDesc = parentEl.children.item(1);
  var txt = parentElDesc.value.trim();  

  var hourDivCont = $('<div>');
  var hourtextarea = $("<textarea>");
  var blockHour = hourDivCont.attr('id');
  var textInArea = hourtextarea.val();
  localStorage.setItem(parentId, txt);  
})

timediv.each(function () {
  var hourDivId = $(this).attr("id");
  var hour = parseInt(hourDivId.split("-")[1]);
  if (hour < presentHour) {
    $(this).addClass("past");
  }
  else if (hour > presentHour) {
    $(this).addClass("future");
  }
  else {
    $(this).addClass("present");
  }
  var enteredText = localStorage.getItem(hourDivId);
  if (enteredText) {
    $(this).find(".description").val(enteredText);
  }
});