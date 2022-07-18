function sortNumbers(a, b, c){
    let arr = [a, b, c]

    arr.sort(function(a,b){
        return a - b
    })
    let newArr = arr.reverse().join('\n')

    console.log(newArr)
}

sortNumbers(3, 1, 2)