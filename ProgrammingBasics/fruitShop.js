function fruitShop(input) {

let fruit = input[0]
let day = input[1]
let quantity = input[2]

let bananaPrice = 0
let applePrice = 0
let orangePrice = 0
let grapefruitPrice = 0
let kiwiPrice = 0
let pineapplePrice = 0
let grapesPrice = 0

if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday") && (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes")) {

switch(day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":

    bananaPrice = 2.50
    applePrice = 1.20
    orangePrice = 0.85
    grapefruitPrice = 1.45
    kiwiPrice = 2.70
    pineapplePrice = 5.50
    grapesPrice = 3.85

    if (fruit === "banana") {
        console.log((bananaPrice * quantity).toFixed(2))
    } else if (fruit === "apple") {
        console.log((applePrice * quantity).toFixed(2))
    } else if (fruit === "orange") {
        console.log((orangePrice * quantity).toFixed(2))
    } else if (fruit === "grapefruit") {
        console.log((grapefruitPrice * quantity).toFixed(2))
    } else if (fruit === "kiwi") {
        console.log((kiwiPrice * quantity).toFixed(2))
    } else if (fruit === "pineapple") {
        console.log((pineapplePrice * quantity).toFixed(2))
    } else if (fruit === "grapes") {
        console.log((grapesPrice * quantity).toFixed(2))
    }

    break;
    
    case "Saturday":
    case "Sunday":

    bananaPrice = 2.70
    applePrice = 1.25
    orangePrice = 0.90
    grapefruitPrice = 1.60
    kiwiPrice = 3.00
    pineapplePrice = 5.60
    grapesPrice = 4.20

    if (fruit === "banana") {
        console.log((bananaPrice * quantity).toFixed(2))
    } else if (fruit === "apple") {
        console.log((applePrice * quantity).toFixed(2))
    } else if (fruit === "orange") {
        console.log((orangePrice * quantity).toFixed(2))
    } else if (fruit === "grapefruit") {
        console.log((grapefruitPrice * quantity).toFixed(2))
    } else if (fruit === "kiwi") {
        console.log((kiwiPrice * quantity).toFixed(2))
    } else if (fruit === "pineapple") {
        console.log((pineapplePrice * quantity).toFixed(2))
    } else if (fruit === "grapes") {
        console.log((grapesPrice * quantity).toFixed(2))
    }

    break;
}
    
} else {
    console.log("error")
}

}

fruitShop(["kiwi", "Monday", "2.5"])