function sumOfOddNumbers(n){
    let oddCounter = 0
    let sum = 0
    for (let i = 1; i > 0; i++){
        if (i % 2 !== 0){
            console.log(i)
            oddCounter++
            sum += i
        }
        if (oddCounter >= n){
            console.log(`Sum: ${sum}`)
            break;
        }
    }
}

sumOfOddNumbers(3)