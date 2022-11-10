//------ Le décompteur de la prochaine mission ------

let deadline = new Date("Nov 14, 2022 06:07:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;
    console.log(t);
    let days = Math.floor( t / ( 1000 * 60 * 60 * 24 ));
    let hours = Math.floor(( t% (1000 * 60 * 60 * 24) ) / ( 1000 * 60 * 60 ));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    }

)
//------ Le décompteur de la prochaine mission (FIN DE SCRIPT)------