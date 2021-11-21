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

//Set today - default start date
var todayDate = new Date();
document.getElementById("startDate").value = todayDate.toISOString().slice(0, 10);
// date maths
function daysAdd(daysNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(fromDate);
  newDate.setDate(startDate.getDate() + daysNum);
  return newDate;
}

function weekAdd(weeksNum, fromDate) {
  var startDate = new Date(fromDate);
  var newDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 83);
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
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Months from " + startDate + " is <strong>" + newDate + "</strong></p>";
}

function setWeeks(weeksNum) {
  var startDate = document.getElementById("startDate").value;
  var newDate = weeksAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Weeks from " + startDate + " is <strong>" + newDate + "</strong></p>";
}

function setDays(daysNum) {
  var startDate1 = document.getElementById("startDate").value;
  var newDate = daysAdd(daysNum - 1, startDate1);
  var newDate = newDate.toDateString();
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Days from " + startDate1 + " is <strong>" + newDate + "</strong></p>";
}
// Add days num from input
function setFreeDays() {
  var startDate = new Date(document.getElementById("startDate").value);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  var newDate = daysAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Days from " + startDate + " is <strong>" + newDate + "</strong></p>";
}
// Add weeks num from input
function setFreeWeeks() {
  var startDate = new Date(document.getElementById("startDate").value);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  var newDate = monthsAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Weeks from " + startDate + " is <strong>" + newDate + "</strong></p>";
}
// Add months num from input
function setFreeMonths() {
  var startDate = new Date(document.getElementById("startDate").value);
  var daysNum = parseInt(document.getElementById("dataVal").value);
  var newDate = monthsAdd(daysNum, startDate);
  var newDate = newDate.toDateString();
  var startDate = startDate.toDateString();
  document.getElementById("result").innerHTML += "<p><strong>" + daysNum + "</strong> Months from " + startDate + " is <strong>" + newDate + "</strong></p>";
}

$('p').html($('p').html().replace(/\|/g, ''));