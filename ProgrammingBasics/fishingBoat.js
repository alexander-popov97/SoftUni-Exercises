function fishing(input) {

    let budget = Number(input[0])
    let season = input[1]
    let people = Number(input[2])
    let boatPrice = 0

    if (season === "Spring") {
        boatPrice = 3000
    } else if (season === "Autumn" || season === "Summer") {
        boatPrice = 4200
    } else if (season === "Winter") {
        boatPrice = 2600
    }

    if (people <= 6) {
        boatPrice = boatPrice * 0.90
    } else if (people >= 7 && people <= 11) {
        boatPrice = boatPrice * 0.85
    } else {
        boatPrice = boatPrice * 0.75
    }

    if (people % 2 === 0 && season !== "Autumn") {
        boatPrice = boatPrice * 0.95
    }

    let diff = Math.abs(budget - boatPrice)

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}

fishing(["2000", "Winter", "13"])