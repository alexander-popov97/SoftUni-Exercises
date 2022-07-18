function skiTrip (input) {

    let dayCount = Number(input[0])
    let nightCount = dayCount - 1
    let typeRoom = input[1]
    let feedback = input[2]

    price = 0

    switch (typeRoom) {
        case "room for one person":
        price = 18 * nightCount

        if (feedback === "positive") {
            price = price * 1.25
        } else {
            price = price * 0.90
        }
        break;
        case "apartment":
            if (dayCount < 10) {
                price = (25 * nightCount) * 0.70
            } else if (nightCount > 15) {
                price = (25 * nightCount) * 0.50
            } else {
                price = (25 * nightCount) * 0.65
            }

            if (feedback === "positive") {
                price = price * 1.25
            } else {
                price = price * 0.90
            }
        break;
        case "president apartment":
            if (dayCount < 10) {
                price = (35 * nightCount) * 0.90
            } else if (nightCount > 15) {
                price = (35 * nightCount) * 0.80
            } else {
                price = (35 * nightCount) * 0.85
            }  
            
            if (feedback === "positive") {
                price = price * 1.25
            } else {
                price = price * 0.90
            }
        break;
    }
    console.log(price.toFixed(2))
}

skiTrip(["14", "apartment", "positive"])