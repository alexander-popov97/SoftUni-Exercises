function maxNumber(arr){
    let newArray = []
    let arrL = arr.length
    
    for (let i = 0; i < arrL; i++){
        let currentNum = arr[i]
        let isLargest = true

        for (let j = i + 1; j < arrL; j++){
            let currentNum2 = arr[j]
            if (currentNum <= currentNum2){
                isLargest = false
            }
        }
        if (isLargest){
            newArray.push(currentNum)
        }
    }
    console.log(newArray.join(" "))
}
maxNumber([1, 4, 3, 2])