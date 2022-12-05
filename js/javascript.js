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
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function setCurrentDate(daysNum) {
  todayDateCalc = daysAdd(daysNum, todayDate);
  document.getElementById("startDate").value = todayDateCalc.toISOString().slice(0, 10);
}

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

function setDays(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var startYear = startDate.slice(0, 4);
  var startMonth = startDate.slice(5, 7);
  var startDay = startDate.slice(8, 10);
  var startDate1 = (startDay + "/" + startMonth + "/" + startYear);
  var newDate = daysAdd(daysNum, startDate);
  //gets the weekday e.g. Mon, Tue
  let weekDay = weekday[newDate.getDay()];
  //gets the day and month e.g. 30/01/2022 this gets 30/01 except its formatted in U.S. time so 01/30
  var theDayMonth = newDate.toISOString().slice(5, 10);
  //gets the month from theDayMonth variable
  var theDay = theDayMonth.slice(3);
  //gets the day from theDayMonth variable
  var theMonth = theDayMonth.slice(0, 2);
  //gets the year
  var theYear = newDate.toISOString().slice(0, 4);
  document.getElementById("result").innerHTML += "<p>" + daysNum + " " + " Days from " + startDate1 + " is " + "<br><h2>" + weekDay + "<br>" + theDay + "/" + theMonth + "/" + theYear + "</h2>";
}

function setWeeks(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var startYear = startDate.slice(0, 4);
  var startMonth = startDate.slice(5, 7);
  var startDay = startDate.slice(8, 10);
  var startDate1 = (startDay + "/" + startMonth + "/" + startYear);
  var newDate = daysAdd(daysNum * 7, startDate);
  let weekDay = weekday[newDate.getDay()];
  //gets the day and month e.g. 30/01/2022 this gets 30/01 except its formatted in U.S. time so 01/30
  var theDayMonth = newDate.toISOString().slice(5, 10);
  //gets the month from theDayMonth variable
  var theDay = theDayMonth.slice(3);
  //gets the day from theDayMonth variable
  var theMonth = theDayMonth.slice(0, 2);
  //gets the year
  var theYear = newDate.toISOString().slice(0, 4);
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Weeks from " + startDate1 + " is " + "<br><h2>" + weekDay + "<br>" + theDay + "/" + theMonth + "/" + theYear + "</h2>";
}

function setMonths(daysNum) {
  var startDate = document.getElementById("startDate").value;
  var startYear = startDate.slice(0, 4);
  var startMonth = startDate.slice(5, 7);
  var startDay = startDate.slice(8, 10);
  var startDate1 = (startDay + "/" + startMonth + "/" + startYear);
  var newDate = monthsAdd(daysNum, startDate);
  let weekDay = weekday[newDate.getDay()];
  //gets the day and month e.g. 30/01/2022 this gets 30/01 except its formatted in U.S. time so 01/30
  var theDayMonth = newDate.toISOString().slice(5, 10);
  //gets the month from theDayMonth variable
  var theDay = theDayMonth.slice(3);
  //gets the day from theDayMonth variable
  var theMonth = theDayMonth.slice(0, 2);
  //gets the year
  var theYear = newDate.toISOString().slice(0, 4);
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Months from " + startDate1 + " is " + "<br><h2>" + weekDay + "<br>" + theDay + "/" + theMonth + "/" + theYear + "</h2>";
}