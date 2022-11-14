function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var todayDate = new Date();
const timeUnit = ["days", "weeks", "months"];


// date maths
function daysAdd(daysNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(fromDate);
  newDate.setDate(startDate.getDate() + daysNum - 1);
  return newDate;
}

function monthsAdd(monthsNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(startDate.getFullYear(), startDate.getMonth() + monthsNum, startDate.getDate() -1);
  return newDate;
}

function setCurrentDate(daysNum) {
  todayDateCalc = daysAdd(daysNum, todayDate);
  document.getElementById("startDate").value = todayDateCalc.toISOString().slice(0, 10);
}

//new function to perform all maths
function setDates(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var newDate = daysAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " " + timeUnit + " from " + startDate + " is " + "<br><h2>" + newDate + "</h2>";
}

function setMonths(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var newDate = monthsAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Months from " + startDate + " is " + "<br><h2>" + newDate + "</h2>";
}

function setWeeks(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var newDate = daysAdd(daysNum * 7, startDate);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Weeks from " + startDate + " is " + "<br><h2>"  + newDate + "</h2>";
}

function setDays(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var newDate = daysAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Days from " + startDate + " is " + "<br><h2>" + newDate + "</h2>";
}
$('p').html($('p').html().replace(/\|/g, ''));