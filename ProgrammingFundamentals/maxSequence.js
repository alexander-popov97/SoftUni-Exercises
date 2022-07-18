function maxSequence(arr){
    let maxArr = []
    for (let i = 0; i < arr.length; i++){
        let currentArr = []
        for (let j = i; j < arr.length; j++){
            if (arr[i] === arr[j]){
                currentArr.push(arr[i])
            } else {
                break;
            }
        }
        if (currentArr.length > maxArr.length){
            maxArr = currentArr
        }
    }
    console.log(maxArr.join(' '))
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])