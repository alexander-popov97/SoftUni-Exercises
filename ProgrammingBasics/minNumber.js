function minNumber(input) {
    let index = 0
    let command = input[index]
    let smallestNumber = Number.MAX_SAFE_INTEGER

    while (command !== "Stop") {
        command = Number(input[index])
        if (command < smallestNumber) {
            smallestNumber = command
        }
        command = input[index]
        index++
    }
    console.log(smallestNumber)

}

minNumber(["-10", "20", "-30", "Stop"])