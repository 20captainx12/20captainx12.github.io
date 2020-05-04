// clock power

function startTime() {
  var today = new Date();
  var d = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = d.getDate() + 1;
  var month = d.getMonth() + 1;
  

  document.getElementById('clock').innerHTML =
  h + ":" + m;
  document.getElementById("date").innerHTML = d.getDate();
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = d.getFullYear();
  var t = setTimeout(startTime, 500);

}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//end clock power