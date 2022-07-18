function mergeArrays(arr1, arr2){
   /* for (let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++){
        arr2[j] = Number(arr2[j])
    } */
    let arr3 = []
    
    for (let k = 0; k < arr1.length; k++){
        if (k % 2 === 0){
            //arr3.push(arr1[k] + arr2[k])
            arr3[k] = Number(arr1[k]) + Number(arr2[k])
        } else {
            //arr3.push("" + arr1[k] + arr2[k])
            arr3[k] = "" + arr1[k] + arr2[k]
        }
    }
    console.log(arr3.join(" - "))
}
mergeArrays(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44'])