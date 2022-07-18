function charactersInRange(char1, char2){
    let one = char1.charCodeAt()
    let two = char2.charCodeAt()
    let min = 0
    let max = 0
    if (one > two){
        min = two
        max = one
    } else if (two > one){
        min = one
        max = two
    }

    let arr = []
    for (let i = min + 1; i < max; i++){
        arr.push(String.fromCharCode(i))
    }
    console.log(arr.join(" "))
}
charactersInRange('a',

'd')