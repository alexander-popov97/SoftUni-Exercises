function burgerBus(input){
    let index = 0
    let totalCities = Number(input[index])
    index++
    let currentCity = input[index]
    index++
    let currentIncome = Number(input[index])
    index++
    let currentExpenses = Number(input[index])
    index++
    let cityCounter = 0
    let totalProfit = 0

    for (let i = 1; i <= totalCities; i++){
        cityCounter++
        if (cityCounter % 3 === 0 && cityCounter % 5 !== 0){
            currentExpenses = currentExpenses + currentExpenses / 2
        } 
        
        if (cityCounter % 5 === 0){
            currentIncome *= 0.90
        }

        currentIncome -= currentExpenses
        totalProfit += currentIncome
        console.log(`In ${currentCity} Burger Bus earned ${currentIncome.toFixed(2)} leva.`)
        
        currentCity = input[index]
        index++
        currentIncome = Number(input[index])
        index++
        currentExpenses = Number(input[index])
        index++
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}
burgerBus(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"])