function bracelets(input){
    let djobni = Number(input[0])
    let moneyPerDay = Number(input[1])
    let expenses = Number(input[2])
    let giftCost = Number(input[3])

    let savedDjobni = djobni * 5
    let savedMoney = moneyPerDay * 5

    let sum = savedDjobni + savedMoney - expenses
    let kuso = Math.abs(sum - giftCost)

    if (sum >= giftCost) {
        console.log(`Profit: ${sum.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${kuso.toFixed(2)} BGN.`)
    }
}

bracelets(["2.10", "17.50", "20.20", "148.50",])