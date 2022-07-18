function reverseAnArrayOfNumbers(num, arr){
    let finalArr = []
    for (let i = 0; i < num; i++){
        finalArr.push(arr[i])
    }
    finalArr.reverse()
    console.log(finalArr.join(" "))
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])