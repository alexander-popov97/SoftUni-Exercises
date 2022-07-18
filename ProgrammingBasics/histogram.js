function histogram(input) {

    let index = 0
    let n = Number(input[index])
    index++

    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0



    for (let i = 0; i < n; i++) {
        let num = Number(input[index])
        index++

        if (num < 200) {
            p1++
        } else if (num >= 200 && num <= 399){
            p2++
        } else if (num >= 400 && num <= 599){
            p3++
        } else if (num >= 600 && num <= 799){
            p4++
        } else {
            p5++
        }
    }

        let p1Percent = (p1 / n * 100).toFixed(2)
        let p2Percent = (p2 / n * 100).toFixed(2)
        let p3Percent = (p3 / n * 100).toFixed(2)
        let p4Percent = (p4 / n * 100).toFixed(2)
        let p5Percent = (p5 / n * 100).toFixed(2)
        
        console.log(`${p1Percent}%`)
        console.log(`${p2Percent}%`)
        console.log(`${p3Percent}%`)
        console.log(`${p4Percent}%`)
        console.log(`${p5Percent}%`)
}
histogram(["3", "1", "2", "999"])