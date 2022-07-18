function cake(input) {
    let w = Number(input[0])
    let l = Number(input[1])

    let cakeSize = w * l
    let index = 2
    let command = input[index]
    let diff = 0

    while (command !== "STOP") {
        if (cakeSize > 0) {
            if (cakeSize - Number(command) < 0) {
                diff = Math.abs(cakeSize - Number(command))
                console.log(`No more cake left! You need ${diff} pieces more.`)
                break;
            }
        }

        cakeSize -= Number(command)
        index++
        command = input[index]
    }
    if (command === "STOP") {
        console.log(`${cakeSize} pieces are left.`)
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"])