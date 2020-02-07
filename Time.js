var Date = new Date();
var weekday = Date.getDay();
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


function getWeekday(numDate){

switch(numDate) {
  case 0:
    weekday = "Sunday";
    break;

  case 1:
    weekday = "Monday";
    break;

  case 2:
    weekday = "Tuesday";
    break;

  case 3:
    weekday = "Wednesday";
    break;

  case 4:
    weekday = "Thursday";
    break;

  case 5:
    weekday = "Friday";
    break;

  case 6:
    weekday = "Saturday";
    break;

  default:
    weekday = "Invalid";
}

  return weekday;

}

console.log("Today is : " + getWeekday(dayOfWeek) + ".\n" + "Current time is : " + outputTime(hr, min, sec));
