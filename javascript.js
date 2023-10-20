var saveBtn = document.querySelector('.saveBtn');

$(document).ready(function () {
var currentHour = dayjs().hour();
console.log(currentHour)

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
  });
});  

$(document).ready(function () {
  var currentDay = dayjs().format("dddd, D, YYYY");
  var displayDay = $('<p>')
  displayDay.text("current Day: " + currentDay);
  $('#header').append(displayDay)
  console.log(currentDay)
})

$(function () {
    $(".saveBtn").on("click", function() {
      var inputValue = $(this).siblings("textarea").val();
      var key = $(this).parent().attr("id");
      localStorage.setItem(key, inputValue);
      console.log(localStorage.getItem(key));
    })  

      $("textarea").each(function() {
        var key =$(this).parent().attr("id");
        var savedValue = localStorage.getItem(key);
        if (savedValue) {
          $(this).val(savedValue);
        }
      })
    });   

