function accountBalance(input) {
    let index = 0
    let command = input[index]
    let balance = 0

    while(command !== "NoMoreMoney") {
        command = Number(input[index])
        if (command < 0) {
            console.log(`Invalid operation!`)
            break;
        } else {
            balance += command
            console.log(`Increase: ${command.toFixed(2)}`)
            index++
            command = input[index]
            
        }
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])