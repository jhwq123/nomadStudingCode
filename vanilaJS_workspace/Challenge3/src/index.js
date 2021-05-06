import "./styles.css";

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  const dateCountNum = xmasDay - date;
  const dateCount = new Date(dateCountNum);

  const dateCountDate = parseInt(dateCountNum / 1000 / 60 / 60 / 24); // 1000ms, 60s, 60M, 24H
  const dateCountHours = dateCount.getHours();
  const dateCountMinutes = dateCount.getMinutes();
  const dateCountSeconds = dateCount.getSeconds();

  colockTitle.innerText = `${dateCountDate}d ${
    dateCountHours < 10 ? `0${dateCountHours}` : dateCountHours
  }h ${dateCountMinutes < 10 ? `0${dateCountMinutes}` : dateCountMinutes}m ${
    dateCountSeconds < 10 ? `0${dateCountSeconds}` : dateCountSeconds
  }s`;
}

const clockContainer = document.querySelector(".js-clock");
const colockTitle = clockContainer.querySelector("h2");

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
// ${dateCountHours < 10 ? `0${dateCountHours}` : dateCountHours}
