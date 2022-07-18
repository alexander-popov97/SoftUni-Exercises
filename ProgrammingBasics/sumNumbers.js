function sumNumbers(input) {
    let index = 0
    let max = Number(input[index])
    index++
    let num = Number(input[index])
    index++
    let sum = 0
    while(true) {
        if (sum >= max) {
            console.log(sum)
            break;
        } else {
            sum += num
            num = Number(input[index])
            index++
        }
    }
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"])