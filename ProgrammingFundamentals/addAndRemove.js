function addAndRemove(arr){
    let index = 0
    let command = arr[index]
    index++
    let finalArr = []
    let arrL = arr.length
    let arrIsEmpty = false
    for (let i = 1; i <= arrL; i++){
        if (command === 'add'){
            finalArr.push(i)
        } else {
            finalArr.pop()
        }
        command = arr[index]
        index++
    }

    let fArrL = finalArr.length
    //console.log(fArrL)
    if (fArrL === 0){
        arrIsEmpty = true
    }

    if (arrIsEmpty){
        console.log('Empty')
    } else {
        console.log(finalArr.join(" "))
    }
}
addAndRemove(['remove', 'remove', 'remove'])