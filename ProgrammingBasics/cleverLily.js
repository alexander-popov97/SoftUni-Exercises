function cleverLily(input) {

    let age = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])
    let bdayMoney = 0
    let currentMoney = 10
    let toyCount = 0

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            bdayMoney += currentMoney
            currentMoney += 10
            bdayMoney -= 1
        } else {
            toyCount++
        }
    }

    let totalSum = bdayMoney + toyCount * toyPrice
    let diff = Math.abs(totalSum - washingMachinePrice)

    if (totalSum >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["10", "170.00", "6"])