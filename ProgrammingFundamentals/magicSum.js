function magicSum(arr, sum){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (j === i){
                break;
            }
            if (arr[i] + arr[j] === sum){
                console.log(arr[j] + " " + arr[i])
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],

    8)