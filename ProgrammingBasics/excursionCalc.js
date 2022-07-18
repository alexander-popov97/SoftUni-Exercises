function exCalc(input) {
    let people = Number(input[0])
    let season = input[1]

    let price = 0
    let discountPrice = 0

    switch(season) {
        case "summer":

            if (people <= 5) {
                price = (people * 48.50)
                discountPrice = price - (price * (15 / 100)) 
            } else {
                price = people * 45
                discountPrice = price - (price * (15 / 100))
            }
        break;

        case "winter":
            if (people <= 5) {
                price = (people * 86)
                discountPrice = price + (price * (8 / 100)) 
            } else {
                price = people * 85
                discountPrice = price + (price * (8 / 100))
            }
        break;

        case "autumn":
            if (people <= 5) {
                discountPrice = people * 60
            } else {
                discountPrice = people * 49.5
            }
        break;

        case "spring":
            if (people <= 5) {
                discountPrice = people * 50
            } else {
                discountPrice = people * 48
            }    
        break;
    }
    console.log(`${discountPrice.toFixed(2)} leva.`)
}

exCalc(["10", "summer"])