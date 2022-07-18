function biggest(num1, num2, num3){
    let arr = [num1, num2, num3]
    let sortedArr = arr.sort(function(a,b){
        return a - b;
    })

    let biggestNum = sortedArr.pop()
    console.log(biggestNum)
}
biggest(4, -6, 2)