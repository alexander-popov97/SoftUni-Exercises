function nonDecreasingSubset(arr){
    let newArr = [arr[0]]
    let max = arr[0]
    for (let i = 1; i <= arr.length; i++){
        if (arr[i] >= max){
            newArr.push(arr[i])
            max = arr[i]
        }
    }
    console.log(newArr.join(" "))
}
nonDecreasingSubset([ 1, 2, 3, 4])