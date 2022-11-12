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


// date maths
function daysAdd(daysNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(fromDate);
  newDate.setDate(startDate.getDate() + daysNum);
  return newDate;
}

function monthsAdd(monthsNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(startDate.getFullYear(), startDate.getMonth() + monthsNum, startDate.getDate());
  return newDate;
}

function setTodayDate() {
  document.getElementById("startDate").value = todayDate.toISOString().slice(0, 10);
}

function setTomorrowDate() {
  var tomorrowDate = daysAdd(1, todayDate);
  document.getElementById("startDate").value = tomorrowDate.toISOString().slice(0, 10);
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
  var startDate1 = document.getElementById("startDate").value;
  var newDate = daysAdd(daysNum - 1, startDate1);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Days from " + startDate1 + " is " + "<br><h2>" + newDate + "</h2>";
}
// Add days num from input
function setFreeDays() {
  var startDate = new Date(document.getElementById("startDate").value);
  var startDate1 = startDate.toISOString().slice(0, 10);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  if (daysNum = "" { //ignore
    var daysNum = document.getElementById('dataVal').placeholder;
  }
  var newDate = daysAdd(daysNum - 1, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Days from " + startDate1 + " is " + "<br><h2>" + newDate + "</h2>";
}
// Add weeks num from input
function setFreeWeeks() {
  var startDate = new Date(document.getElementById("startDate").value);
  var startDate1 = startDate.toISOString().slice(0, 10);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  var newDate = daysAdd(daysNum * 7, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Weeks from " + startDate1 + " is " + "<br><h2>" + newDate + "</h2>";
}
// Add months num from input
function setFreeMonths() {
  var startDate = new Date(document.getElementById("startDate").value);
  var startDate1 = startDate.toISOString().slice(0, 10);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  var newDate = monthsAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p>" + daysNum + " Months from " + startDate1 + " is " + "<br><h2>" + newDate + "</h2>";
}

$('p').html($('p').html().replace(/\|/g, ''));