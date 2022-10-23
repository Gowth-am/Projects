const secondhand = document.getElementById("seconds");
const minuteshand = document.getElementById("minutes");
const hourhand = document.getElementById("hours");

const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(`${hours}:${minutes}:${seconds}`);
  secondhand.style.transform = "rotate(" + seconds * 6 + "deg)";
  minuteshand.style.transform =
    "rotate(" + (minutes * 6 + seconds / 10) + "deg)";
  hourhand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
};
setInterval(getTime, 1000);
