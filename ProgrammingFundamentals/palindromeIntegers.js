function palindromeIntegers(arr){
    let reversed = ""
    for (let i = 0; i < arr.length; i++){
        reversed = String(arr[i]).split("").reverse().join("")
        if (Number(reversed) == arr[i]){
            console.log('true')
        } else {
            console.log('false')
        }
    }
}
palindromeIntegers([32,2,232,1010])