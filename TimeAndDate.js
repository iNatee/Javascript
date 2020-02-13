var Date = new Date();
var day = Date.getDay();
var hr = Date.getHours();
var min = Date.getMinutes();
var sec = Date.getSeconds();
var dd = Date.getDate();
var mm = Date.getMonth() + 1;
var yyyy = Date.getFullYear();
var dateShort = DDMMYYYY (dd, mm, yyyy);
var dateFull = DAYMONTHYYYY(day, dd, month, yyyy);

var day = (function() {
var dayOfWeek = Date.getDay();

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
var monthInYear = Date.getMonth() + 1;

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

function outputTime(hrs, mins, secs) {

  if (hrs < 12 && hrs != 0) {
  	hrs = hrs + "AM";
  }

   else {
  	hrs = (hrs - 12) + "PM";
  }

  if (mins < 10)  {
    mins = "0" + mins;
  }

  if (secs < 10)  {
    secs = "0" + secs;
  }
    return hrs + " : " + mins + " : " + secs;
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

var unorderedList = document.createElement('ul');
var listItem = document.createElement('li');

var dateLong = document.createTextNode("Full Date: " + dateFull);
var dateSmall = document.createTextNode("Short Date: " + dateShort);
var currentTime = document.createTextNode("Current Time: " + outputTime(hr, min, sec));

var pos1 = document.getElementsByTagName('ul')[0];
pos1.appendChild(dateLong);
pos1.appendChild(document.createElement("br"));
pos1.appendChild(document.createElement("br"));
var pos2 = document.getElementsByTagName('ul')[0];
pos2.appendChild(dateSmall);
pos2.appendChild(document.createElement("br"));
pos2.appendChild(document.createElement("br"));
var pos3 = document.getElementsByTagName('ul')[0];
pos3.appendChild(currentTime);
pos3.appendChild(document.createElement("br"));
pos3.appendChild(document.createElement("br"));
