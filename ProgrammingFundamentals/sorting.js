function sorting(arra){
let arr = arra.slice()
let arrAscending = arr.sort((a, b) => a - b)
let arrDescending = arrAscending.slice().reverse()
let finalArr = []

for (let i = 0; i < arr.length; i++){

    finalArr.push(arrDescending.shift())
    if (arra.length % 2 !== 0 && i === Math.floor(arra.length / 2)){
        break;
    }
    finalArr.push(arrAscending.shift())
}
console.log(finalArr.join(" "))
}
sorting([5, 10, 716, 8, 26])