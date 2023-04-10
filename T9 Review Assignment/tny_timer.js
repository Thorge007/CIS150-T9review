"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Thomas Hendren
   Date:   12/4/2020

*/

/* Function that runs and displays countdown clock */
showClock();
setInterval("showClock()", 1000);

/* Creates countdown clock function */
function showClock() {

  /* Variables to store date and time */
  var thisDay = new Date("May 19, 2021 09:31:27");
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

/* Displays date and time */
  document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;

/* calls the function and stores the date in the j4Date variable */
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21, 0, 0);

/* Calculates days until July 4th */
  var days = (j4Date - thisDay)/(1000*60*60*24);

/* Calculates hours left in the day and minutes and seconds left in the current hour */
  var hrs = (days - Math.floor(days))*24;
  var mins = (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;

/* Displays time left until July 4th */
  document.getElementById('dLeft').textContent = Math.floor(days);
  document.getElementById('hLeft').textContent = Math.floor(hrs);
  document.getElementById('mLeft').textContent = Math.floor(mins);
  document.getElementById('sLeft').textContent = Math.floor(secs);

}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
