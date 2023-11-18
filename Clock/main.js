function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am = "AM";

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}

var interval = setInterval(clock);
