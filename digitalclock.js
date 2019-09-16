function digitalClock() {
    let date = new Date();
    let hours = date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours() ;
    let minutes = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds().toString().length < 2 ? '0' + date.getSeconds() : date.getSeconds();
    let day = date.getDay();
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let currentTime = weekDays[day]+' '+ hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = currentTime;

}

setInterval(digitalClock, 1000);
