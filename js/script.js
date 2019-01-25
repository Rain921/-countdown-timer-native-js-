//timer
let deadline = '2019-02.01'; // дедлайн  ставим желаемый

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 60 / 60) % 24),
        days = Math.floor((t / (1000 * 60 * 60 * 24)));
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    if (days < 10) days = "0" + days;
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };


}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');


    timeInterval = setInterval(() => {
        updateClock();
    }, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        days.textContent = t.days;
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);

        }
    }
}
setClock('timer', deadline);// выводим id таймера и свой дедлайн сколько угодно