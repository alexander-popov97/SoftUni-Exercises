function addAndSubtract(arr){  
    let ogSum = 0
    for (el of arr){
        ogSum += el
    }
    for (let i = 0; i <= arr.length - 1; i++){
        if (Number(arr[i]) % 2 === 0){
            arr[i] = arr[i] + i
        } else {
            arr[i] = arr[i] - i
        }
    }
    let newSum = 0
    for (ele of arr){
        newSum += ele
    }
    console.log(arr)
    console.log(ogSum)
    console.log(newSum)

}
addAndSubtract([5, 15, 23, 56, 35])