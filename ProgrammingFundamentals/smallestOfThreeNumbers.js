function smallestOfThreeNumbers(num1, num2, num3){
    let arr = [num1, num2, num3]
    let sortedArr = arr.sort(function(a, b){
        return a - b
    })
    console.log(sortedArr[0])
}
smallestOfThreeNumbers(2,

    5,
    
    3)