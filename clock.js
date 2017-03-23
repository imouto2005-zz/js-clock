document.addEventListener('DOMContentLoaded', function () {
  // var sec = document.querySelector('#second')
  // var min =document.querySelector('#minute')
  // var hr = document.querySelector('#hour')


  ////////////////////////////////////////
  var secondAndMinuteDegree = 6
  var hourDegree = 30
  var timeInterval = 1000

  setInterval(runClock, timeInterval)

  function runClock() {
    var time = new Date()
    // secondRotation(time.getSeconds())
    // minuteRotation(time.getMinutes())
    // hourRotation(time.getHours())
    updateTime('second', time.getSeconds(), secondAndMinuteDegree)
    updateTime('minute', time.getMinutes(), secondAndMinuteDegree)
    updateTime('hour', time.getHours(), hourDegree)
  }

  function updateTime(element, timeunit, degree) {
    var clockElement = document.querySelector('#' + element)
    clockElement.style.transform = "rotate(" + timeunit * degree + "deg)"
  }
  //
  // var digitalClock = document.querySelector('#digitalClock')
  // digitalClock.textContent = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
  /////////////////////////////////////////////////////////


  // var now = new Date();
  // var actualS = 0
  // var secDegree = 6
  // function secondRotation() {
  //   sec.style.transform = "rotate(" + actualS * secDegree + "deg)"
  //   actualS++
  // }
  // setInterval(secondRotation, 1000)
  //
  // var actualM = Math.floor(actualS/60)
  // var minDegree = 6
  // function minuteRotation () {
  //   min.style.transform = "rotate(" + actualM * minDegree + "deg)"
  //   actualM++
  // }
  // setInterval(minuteRotation, 60000)
  //
  // var actualH = Math.floor(actualM/60)
  // var hrDegree = 30
  // function hourRotation () {
  //   hr.style.transform = "rotate(" + actualH * hrDegree + "deg)"
  //   actualH++
  // }
  // setInterval(hourRotation, 3600000)

  // var now = new Date();
  // var currentSec = now.getSeconds();
  // var currentMin = now.getMinutes();
  // var currentHr = now.getHours();
  //
  // function moveSec(s) {
  //   var secondDeg = ((s/60) * 360);
  //   sec.style.transform = "rotate(" + secondDeg + "deg)";
  // }
  //
  // var degreeSec = function() {
  //   currentSec++;
  //   moveSec(currentSec);
  // }
  //
  // moveSec(currentSec);
  // var startSec = setInterval(degreeSec, 1000);
  //
  // function moveMin(m) {
  //   var minDeg = ((m/60) * 360)
  //   min.style.transform = "rotate(" + minDeg + "deg)";
  // }
  //
  // var degreeMin = function() {
  //   currentMin++;
  //   moveMin(currentMin);
  // }
  //
  // moveMin(currentMin);
  // var startMin = setInterval(degreeMin, 60000);

  // function secondRotation(s) {
  //   return (s/60) * 360
  // }
  //
  // function minuteRotation(m) {
  //   return (m/60) * 360
  // }
  //
  // function hourRotation(h) {
  //   if (h === 12) {
  //     return 0
  //   }
  //   return (h/12) * 360
  // }
  //
  // function secTimer () {
  //   timerId = setInterval(secondRotation, 1000);
  //   if (currentSec >= 60) { clearTimeout(timerId); }
  // }
  //
  // sec.style.transform = "rotate(" + degrees + "deg)"
  // min.style.transform = "rotate(" + degrees + "deg)"
// })

// $(document).ready(function() {
//   // var hour = document.querySelector('#hour')
//   // // IS THE SAME AS
//   // var $hour = $('#hour')
//
//   // var h1 = document.querySelector('h1')
//   // h1.textContent = "new title"
//   // h1.innerHTML = '<span>New Title with Span</span>'
//   // IS THE SAME AS:
//   // var $h1 = $('h1')
//   // $h1.html('<a href="google.com" target="_blank">Link to Google</a>')
//
//   // var h2 = document.querySelector.createElement('h2')
//   // h2.textContent = "heading 2"
//   // var clock = document.querySelector('#clock')
//   // clock.appendChild(h2)
//
//   var $clock = $('#clock')
//   var $newH2 = $('<h2>').text('heading 2')
//   $clock.append($newH2)







})
