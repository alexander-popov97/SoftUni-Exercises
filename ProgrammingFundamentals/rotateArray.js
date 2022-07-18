function rotateArray(arr){
    let rotations = Number(arr.pop())

    for (let i = rotations; i > 0; i--){
        let last = arr.pop()
        arr.unshift(last)
    }
    console.log(arr.join(" "))
}
rotateArray(['1', '2', '3', '4', '2'])