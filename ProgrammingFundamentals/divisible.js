function divisible (num){

    let div = 0
    let isDivisible = true

    if (num % 10 === 0){
        div = 10
    } else if (num % 7 === 0){
        div = 7
    } else if (num % 6 === 0){
        div = 6
    } else if (num % 3 === 0){
        div = 3
    } else if (num % 2 === 0){
        div = 2
    } else {
        isDivisible = false
        console.log('Not divisible')
    }

    if (isDivisible){
    console.log(`The number is divisible by ${div}`)
    }
}

divisible(60)