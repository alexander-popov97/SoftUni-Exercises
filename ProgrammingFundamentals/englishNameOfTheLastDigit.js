function englishNameOfTheLastDigit(num) {

    let strNum = String(num)

    if (strNum.slice(-1) == 0) {
        console.log('zero')
    } else if (strNum.slice(-1) == 1) {
        console.log('one')
    } else if (strNum.slice(-1) == 2) {
        console.log('two')
    } else if (strNum.slice(-1) == 3) {
        console.log('three')
    } else if (strNum.slice(-1) == 4) {
        console.log('four')
    } else if (strNum.slice(-1) == 5) {
        console.log('five')
    } else if (strNum.slice(-1) == 6) {
        console.log('six')
    } else if (strNum.slice(-1) == 7) {
        console.log('seven')
    } else if (strNum.slice(-1) == 8) {
        console.log('eight')
    } else if (strNum.slice(-1) == 9) {
        console.log('nine')
    }
}

englishNameOfTheLastDigit(511)