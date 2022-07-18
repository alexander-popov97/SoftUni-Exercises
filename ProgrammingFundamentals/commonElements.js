function commonElements(arr1, arr2){
    let buff = ""
    for(let i = 0; i < arr1.length - 1; i++){
        if (arr2.includes(arr1[i])){
            buff = buff + arr1[i] + "\n"
        }
    }
    console.log(buff)
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])