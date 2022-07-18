function accountBalance(input) {
    let index = 0
    let command = input[index]

    let balance = 0

    while (true) {
        if (command === "NoMoreMoney") {
            console.log(`Total: ${balance.toFixed(2)}`)
            break;
        } else {
            command = Number(input[index])
            if (command < 0) {
                console.log(`Invalid operation!`)
                console.log(`Total: ${balance.toFixed(2)}`)
                break;
            } else {
                balance += command
                console.log(`Increase: ${command.toFixed(2)}`)
                command = Number(input[index])
                index++
            }
        }
    }
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])