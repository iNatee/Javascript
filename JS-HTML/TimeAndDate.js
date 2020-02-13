var newDate = new Date(),
 hr = newDate.getHours(),
 min = newDate.getMinutes(),
 sec = newDate.getSeconds(),
 dd = newDate.getDate(),
 mm = newDate.getMonth() + 1,
 yyyy = newDate.getFullYear();

var day = (function() {
var dayOfWeek = newDate.getDay();

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
var monthInYear = newDate.getMonth() + 1;

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

var idVar = setInterval(() => {
	timer()
}, 1000);

function timer() {

  var dateVar = new Date(),
  ampm,
  hrs = dateVar.getHours(),
  mins= dateVar.getMinutes(),
  secs = dateVar.getSeconds(),
  time = dateVar.toLocaleTimeString();


  if (hrs < 12 && hrs != 0) {
  ampm = "AM";
  }

   else {
  ampm = "PM";
  }

  if (mins < 10)  {
    mins = "0" + mins;
  }

  if (secs < 10)  {
    secs = "0" + secs;
  }

  document.getElementById("timeArea").innerHTML = time + ampm;
  document.getElementById("timeArea").appendChild(document.createElement("br"));
  document.getElementById("timeArea").appendChild(document.createElement("br"));
};

var dateSmall = DDMMYYYY (dd, mm, yyyy),
 dateFull = DAYMONTHYYYY(day, dd, month, yyyy),
 listItem = document.createElement("li"),
 dateLong = document.createTextNode("Full Date: " + dateFull),
 dateShort = document.createTextNode("Short Date: " + dateSmall);

var pos1 = document.getElementsByTagName("ul")[0];
pos1.appendChild(dateLong);
pos1.appendChild(document.createElement("br"));
pos1.appendChild(document.createElement("br"));
var pos2 = document.getElementsByTagName("ul")[0];
pos2.appendChild(dateShort);
pos2.appendChild(document.createElement("br"));
pos2.appendChild(document.createElement("br"));
