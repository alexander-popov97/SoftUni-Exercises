function rightPlace(wrong, char, right){
    let str = wrong.replace('_', char)
    if (str === right){
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
}
rightPlace()