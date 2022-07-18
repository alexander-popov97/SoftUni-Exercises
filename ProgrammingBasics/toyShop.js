function toyShop(input){
 
    let trip = Number(input[0])
    let puzzles = Number(input[1])
    let doll = Number(input[2])
    let teddy = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5])
 
 
 
    let totalToys = puzzles + doll + teddy + minion + truck
    let discount = 0
    let totalprice = puzzles * 2.6 + doll * 3 + teddy * 4.1 + minion * 8.2 + truck * 2
 
    if (totalToys >= 50){
        discount = totalprice * 0.25
    }
 
    let profit = totalprice - discount
    let rent = profit * 0.1
    let profitAfterRent = totalprice - discount - rent
    let moneyleft = Math.abs(profitAfterRent - trip).toFixed(2)
 
    if (profitAfterRent >= trip){
        console.log(`Yes! ${moneyleft} lv left.`)
    } else {
        console.log(`Not enough money! ${moneyleft} lv needed.`)
    }
 
}

toyShop(["40.8", "20", "25", "30", "50", "10"])