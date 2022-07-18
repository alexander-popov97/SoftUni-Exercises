function equalArrays(arr1, arr2){
    let sum = 0
    for (let i = 0; i <= arr1.length - 1; i++){
        arr1[i] = Number(arr1[i])
        sum += arr1[i]
    }
    for (let j = 0; j <= arr2.length - 1; j++){
        arr2[j] = Number(arr2[j])
    }

    let areEqual = true

    for (let k = 0; k <= arr1.length - 1; k++){
        if (arr1[k] !== arr2[k]){
            console.log(`Arrays are not identical. Found difference at ${k} index`)
            areEqual = false
            break;
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['10','20','30'],

['10','20','30'])