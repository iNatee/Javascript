var Date = new Date();
var dayOfWeek = Date.getDay();
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


function getDayOfTheWeek(numDate){

switch(numDate) {
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
    dayOfWeek = "Invalid";
}

  return dayOfWeek;

}

console.log("Today is : " + getDayOfTheWeek(dayOfWeek) + ".\n" + "Current time is : " + outputTime(hr, min, sec));
