function factorialDivision(num1, num2){
    let first = 1
    let second = 1

    for (let i = num1; i > 0; i--){
        first *= i 
    }

    for (let j = num2; j > 0; j--){
        second *= j
    }

    let final = first / second
    console.log(final.toFixed(2))
}
factorialDivision(5,

    2)