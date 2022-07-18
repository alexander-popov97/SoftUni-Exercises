function printNthElement(arr){
    let step = Number(arr.pop())
    let finalArr = []

    for (let i = 0; i < arr.length; i += step){
        finalArr.push(arr[i])
    }
    console.log(finalArr.join(" "))
}
printNthElement(['5', '20', '31', '4', '20', '2'])