function distinctArray(arr){
    for (let i = 0; i < arr.length; i++){
        let el = arr[i]
        for (let j = arr.length - 1; j > i; j--){
            if (el === arr[j]){
                arr.splice(j, 1)
            }
        }
    }
    console.log(arr.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])