// console.log(targetDate)
// console.log(now)



// Jan 1, 1970


    const targetDate = new Date("Dec 31, 2023 00:00:00").getTime();
    const now = new Date().getTime();

    let gap = targetDate - now;
    // console.log(gap);
    //     /*
    //     second = 1000
    //     minutes = second * 60
    //     hour = minutes * 60
    //     day = hour * 24
    //      */

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24

    let textDay = Math.floor(gap / days);
    let textHour = Math.floor((gap % days) / hours)
    let textMinute = Math.floor((gap % hours) / minutes)
    let textSecond = Math.floor((gap % minutes) / seconds)

    // console.log(textSecond)

    document.querySelector("#days span").innerHTML = textDay
    document.querySelector("#hours span").innerHTML = textHour
    document.querySelector("#mins span").innerHTML = textMinute
    document.querySelector("#secs span").innerHTML = textSecond


    console.log(daysInWeb) // 31



