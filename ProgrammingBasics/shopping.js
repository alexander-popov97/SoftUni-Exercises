function shopping(input){
 
    let budget = Number(input[0])
    let countVGA = Number(input[1])
    let countCPU = Number(input[2])
    let countRAM = Number(input[3])
 
    let priceVGA = countVGA * 250
    let priceCPU = countCPU * (priceVGA * 0.35)
    let priceRAM = countRAM * (priceVGA * 0.10)
    let totalSum = priceVGA + priceCPU + priceRAM
 
    if (countVGA > countCPU){
        totalSum = totalSum * 0.85
    }
 
    let diff = Math.abs(budget - totalSum)
 
    if (budget >= totalSum){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}