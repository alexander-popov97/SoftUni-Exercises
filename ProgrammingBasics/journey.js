function journey(input) {

    let budget = Number(input[0])
    let season = input[1]

    let destination = ""
    let type = ""
    let cost = 0
    let diff = 0

    switch (season) {
        case "summer":
        if (budget <= 100) {
            cost = budget * 0.30
            type = "Camp"
            destination = "Bulgaria"
        } else if (budget > 1000) {
            cost = budget * 0.90
            type = "Hotel"
            destination = "Europe"
        } else {
            cost = budget * 0.40
            type = "Camp"
            destination = "Balkans"
        }
        break;

        case "winter":
        if (budget <= 100) {
            cost = budget * 0.70
            type = "Hotel"
            destination = "Bulgaria"
        } else if (budget > 1000) {
            cost = budget * 0.90
            type = "Hotel"
            destination = "Europe"
        } else {
            cost = budget * 0.80
            type = "Hotel"
            destination = "Balkans"
        }  
        break;
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${cost.toFixed(2)}`)
}

journey(["50", "summer"])