var ms = 0,
  s = 0,
  m = 0;
var timer;
var stopwatchEl = document.querySelector("#abcd");
var lapsContainer = document.querySelector(".laps ");

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}
function run() {
  stopwatchEl.innerHTML = timing();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}
function pause() {
  clearInterval(timer);
  timer = false;
}
function stop() {
  clearInterval(timer);
  timer = false;
  (m = 0), (s = 0), (ms = 0);
  timing();
}
function timing() {
  return (
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms)
  );
}
function restart() {
  stop();
  start();
}
function laps() {
  var li = document.createElement("li");
  li.innerHTML = timing();
  lapsContainer.appendChild(li);
}
function resetLaps() {
  lapsContainer.innerHTML = "";
}
