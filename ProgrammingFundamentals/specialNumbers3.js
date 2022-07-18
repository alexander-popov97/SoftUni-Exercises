function specialNumbers3(num){
    for (let i = 1; i <= num; i++){
        let iNum = i
        let sum = 0
        while (iNum > 0){
            sum += iNum % 10
            iNum = Math.trunc(iNum / 10)
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`)
            continue;
        } else {
            console.log(`${i} -> False`)
            continue;
        }
    }
}
specialNumbers3(15)