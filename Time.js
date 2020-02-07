var Date = new Date();
var day = Date.getDay();
var hr = Date.getHours();
var min = Date.getMinutes();
var sec = Date.getSeconds();

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


function getWeekday(date){

switch(date) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  default:
    day = "Invalid";
}

  return day;

}

console.log("Today is: " + getWeekday(day) + ".\n" + "Current time is : " + outputTime(hr, min, sec));

document.getElementById("p1").innerHTML = "Today is: " + getWeekday(day) + "." + "<br/>" + "<br/>" + "Current time is : " + outputTime(hr, min, sec);
