function arrayRotation(arr, num){
    while (num > 0){
        let first = arr[0]
        arr.push(first)
        arr.shift()

        num--
    }
   
console.log(arr.join(" ")) 
}
arrayRotation([51, 47, 32, 61, 21], 2)