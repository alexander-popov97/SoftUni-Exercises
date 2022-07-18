function chessBoard(num){
let head = `<div class="chessboard">\n`
let row1 = `<div>\n
<span class="black"></span>\n
<span class="white"></span>\n
<span class="black"></span>\n
</div>\n`
let row2 = `<div>\n
<span class="white"></span>\n
<span class="black"></span>\n
<span class="white"></span>\n
</div>\n`
let arr = [row1]
let newArr = []
for (let i = 1; i <= num; i++){
if (arr.pop() == row1){
    newArr.push(row2)
} else {
    newArr.push(row1)
}
}
console.log(head)
console.log(newArr.join(""))


}
chessBoard(2)