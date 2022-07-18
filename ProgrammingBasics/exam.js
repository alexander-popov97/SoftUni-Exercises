function exam(input) {
    let examHour = Number(input[0])
    let examMinutes = Number(input[1])
    let arriveHour = Number(input[2])
    let arriveMinutes = Number(input[3])

    let examTimeMinutes = examHour * 60 + examMinutes
    let totalMinutesArrive = arriveHour * 60 + arriveMinutes
    let diff = Math.abs(examTimeMinutes - totalMinutesArrive)

    let studentHours = Math.floor(diff / 60)
    let studentMinutes = diff % 60

    if (examTimeMinutes > totalMinutesArrive && diff > 30) {
        console.log("Early")
        if (examTimeMinutes > totalMinutesArrive && diff >= 60) {
            if (studentMinutes < 10) {
            console.log(`${studentHours}:0${studentMinutes} hours before the start`)
            } else {
            console.log(`${studentHours}:${studentMinutes} hours before the start`) 
            }
        } else {
            console.log(`${diff} minutes before the start`)
        }
    }

    if (examTimeMinutes >= totalMinutesArrive && diff <= 30) {
        console.log("On time")
        if (examTimeMinutes > totalMinutesArrive && diff !== 0) {
        console.log(`${diff} minutes before the start`)
        }
    }

    if (examTimeMinutes < totalMinutesArrive) {
        console.log("Late")
        if (diff >= 60 && studentMinutes < 10) {
            console.log(`${studentHours}:0${studentMinutes} hours after the start`)    
        } else if (diff >= 60 && studentMinutes >= 10) {
            console.log(`${studentHours}:${studentMinutes} hours after the start`)
        } else if (diff < 60) {
            console.log(`${studentMinutes} minutes after the start`)  
        }
    }


}

exam(["10", "00", "10", "00"])