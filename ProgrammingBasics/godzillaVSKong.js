function godzillaVSKong(input){
 
    let budget = Number(input[0])
    let decore = budget * 0.10
    let extraCount = Number(input[1])
    let clothesPrice = Number(input[2])
 
    let clothing = clothesPrice * extraCount
 
    if (extraCount > 150){
    let clothing = clothing * 0.90
    }
 
    let totalSum = clothing + decore
 
    let diff = Math.abs(totalSum - budget)
 
    if (budget >= totalSum){
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }   else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
 
}
godzillaVSKong(["20000", "120", "55.5"])