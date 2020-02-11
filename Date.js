var myDate = new Date();
var dd = myDate.getDate();
var mm = myDate.getMonth() + 1;
var yyyy = myDate.getFullYear();
var hasClick = true;

var day = (function() {
var dayOfWeek = myDate.getDay();

switch (dayOfWeek)  {
  case 0:
  dayOfWeek = "Sunday";
  break;

  case 1:
  dayOfWeek = "Monday";
  break;

  case 2:
  dayOfWeek = "Tuesday";
  break;

  case 3:
  dayOfWeek = "Wednesday";
  break;

  case 4:
  dayOfWeek = "Thursday";
  break;

  case 5:
  dayOfWeek = "Friday";
  break;

  case 6:
  dayOfWeek = "Saturday";
  break;

  default:
  dayOfWeek = "Today";
  break;
}

  return dayOfWeek;

}());

var month = (function() {
var monthInYear = myDate.getMonth() + 1;

switch (monthInYear)  {
  case 1:
  monthInYear = "January";
  break;

  case 2:
  monthInYear = "Feburary";
  break;

  case 3:
  monthInYear = "March";
  break;

  case 4:
  monthInYear = "April";
  break;

  case 5:
  monthInYear = "May";
  break;

  case 6:
  monthInYear = "June";
  break;

  case 7:
  monthInYear = "July";
  break;

  case 8:
  monthInYear = "August";
  break;

  case 9:
  monthInYear = "September";
  break;

  case 10:
  monthInYear = "October";
  break;

  case 11:
  monthInYear = "November";
  break;

  case 12:
  monthInYear = "December";
  break;

  default:
  monthInYear = "This Month";
  break;
}

  return monthInYear;

}());

function changeDate(hasClick) {

  var elDate = document.getElementById('date');

  if (hasClick == true) {
    hasClick = false;
    return DDMMYYYY (dd, mm, yyyy);
  } else {
    hasClick = true;
    return DAYMONTHYYYY(day, dd, month, yyyy);
  }

}

function DDMMYYYY (dd, mm, yyyy) {
  if (dd < 10)  {
    dd = "0" + dd;
  }

  if (mm < 10)  {
    mm = "0" + mm;
  }

  return dd + "/" + mm + "/" + yyyy;

}

function DAYMONTHYYYY(day, dd, month, yyyy) {

  var connector;

  if (dd == 1 || dd == 21 || dd == 31)  {
    connector = "st";
  } else if (dd == 2 || dd == 21) {
    connector = "nd";
  } else if (dd == 3) {
    connector = "rd";
  } else {
    connector = "th";
  }

  return day + " " + dd + connector + " " + month + " " + yyyy;

}

var btnChange = document.getElementById('btnChangeFormat');
btnChange.addEventListener('click', function() {changeDate(hasClick);}, false);


var heading = document.getElementById('head1');
var newHeading = changeDate(hasClick);
heading.innerHTML = '<h1 id = "head1">' + newHeading + '</h1>';
