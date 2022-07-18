function oddAndEvenSum(num){
    let str = String(num)
    let arr = str.split("")
    let oddSum = 0
    let evenSum = 0
    for (let i = 0; i <= arr.length - 1; i++){

        if (Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i])
        } else {
            oddSum += Number(arr[i])
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)