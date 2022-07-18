function workingHours(input) {

    let h = Number(input[0])
    let day = input[1]

    switch(day) {
        case "Monday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }
        break;
        case "Tuesday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }    
        break;
        case "Wednesday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }    
        break;
        case "Thursday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }    
        break;
        case "Friday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }    
        break;
        case "Saturday":
        if (h >= 10 && h < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }    
        break;
        case "Sunday":
        console.log("closed")    
        break;
    }
}

workingHours(["18", "Friday"])