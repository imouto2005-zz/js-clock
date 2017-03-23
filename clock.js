document.addEventListener('DOMContentLoaded', function () {

  var secondAndMinuteDegree = 6
  var hourDegree = 30
  var timeInterval = 1000

  setInterval(runClock, timeInterval)

  function runClock() {
    var time = new Date()
    updateTime('second', time.getSeconds(), secondAndMinuteDegree)
    updateTime('minute', time.getMinutes(), secondAndMinuteDegree)
    updateTime('hour', time.getHours(), hourDegree)
  }

  function updateTime(element, timeunit, degree) {
    var clockElement = document.querySelector('#' + element)
    clockElement.style.transform = "rotate(" + timeunit * degree + "deg)"
  }


  // random notes
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

})
