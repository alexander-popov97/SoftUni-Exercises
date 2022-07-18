function accountBalance(input) {
    let index = 0
    let command = input[index]

    let balance = 0

    while (command !== "NoMoreMoney") {
        command = Number(input[index])
        if (command > 0) {
            balance += command
            console.log(`Increase: ${command.toFixed(2)}`)
            command = Number(input[index])
            index++
        } else {
            console.log(`Invalid operation!`)
            console.log(`Total: ${balance}`)
            break;
        }
    }
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])