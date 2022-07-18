function hotelRoom(input) {

let month = input[0]
let nightCount = Number(input[1])

let studioPrice = 0
let flatPrice = 0

if (month === "May" || month === "October") {
    studioPrice = 50 * nightCount
    flatPrice = 65 * nightCount

    if (nightCount > 14) {
        flatPrice = flatPrice * 0.90
        studioPrice = studioPrice * 0.70
    } else if (nightCount >= 8 && nightCount <= 14) {
        studioPrice = studioPrice * 0.95
    }
}
if (month === "June" || month === "September") {
    studioPrice = 75.20 * nightCount
    flatPrice = 68.70 * nightCount

    if (nightCount > 14) {
        flatPrice = flatPrice * 0.90
        studioPrice = studioPrice * 0.80
    }
}
if (month === "July" || month === "August") {
    studioPrice = 76 * nightCount
    flatPrice = 77 * nightCount
        if (nightCount > 14) {
            flatPrice = flatPrice * 0.90
        }
}

console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`)
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom(["August", "20"])
