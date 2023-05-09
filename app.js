const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2024';
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, seconds)

    dayEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown()

setInterval(countdown, 1000)