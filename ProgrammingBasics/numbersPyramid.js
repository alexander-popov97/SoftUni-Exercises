function pyramid(input){
    let n = Number(input[0])
    let printNum = 1
    let isBigger = false

    for (let i = 1; i <= n; i++){
        let buff = ""
        for (let cols = 1; cols <= i; cols++){
            buff += printNum + " "
            printNum++
            if (printNum > n) {
                isBigger = true
                break;
            }
        }
    console.log(buff)
    if (isBigger) {
        break;
    }
    }   
}
pyramid(["7"])