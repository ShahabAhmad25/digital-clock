function updateClock() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let format = "AM";
  if (hours >= 12) {
    format = "PM";
  }
  const time = `${hours%12==0?12:hours%12}:${minutes < 10 ? minutes.toString().padStart(2,"0") : minutes}:${seconds < 10 ? seconds.toString().padStart(2,"0") : seconds} ${format}`;
  const date = `${currentTime.getDate()}:${currentTime.getMonth()}:${currentTime.getFullYear()}`;
  document.getElementById("clock").innerText = time;
  document.getElementById("date").innerText = date;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[currentTime.getDay()];
  document.getElementById("day").innerText = currentDay;
}

updateClock();
setInterval(updateClock, 1000);
