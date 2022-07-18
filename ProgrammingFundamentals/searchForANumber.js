function searchForANumber(arr1, arr2){
    let elementsToTake = arr2[0]
    let howManyToDelete = arr2[1]
    let wtbNumber = arr2[2]

    let newArr1 = arr1.slice(0, elementsToTake)
    let newArr2 = newArr1.slice(howManyToDelete)

    let counter = 0

    for (let i = 0; i < newArr2.length; i++){
        if (newArr2[i] === wtbNumber){
            counter++
        }
    }
    console.log(`Number ${wtbNumber} occurs ${counter} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])