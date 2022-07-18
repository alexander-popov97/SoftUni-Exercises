function stavri(input) {
    let days = Number(input[0])
    let rakia = Number(input[1])
    let index = 2
    let degrees = Number(input[index])
    let totalRakia = 0
    let totalDegrees = 0

    for (let i = 0; i < days; i++){
        totalRakia += rakia
        totalDegrees += (rakia * degrees)
        index++
        rakia = Number(input[index])
        index++
        degrees = Number(input[index])
    }

    let avgDegrees = totalDegrees / rakia

    console.log(`Liter: ${totalRakia.toFixed(2)}`)
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`)

    if (avgDegrees > 42){
        console.log(`Dilution with distilled water!`)
    } else if (avgDegrees <= 42 && avgDegrees >= 38) {
        console.log(`Super!`)
    } else {
        console.log(`Not good, you should baking!`)
    }
}

stavri(["3", "100", "45", "50", "55", "150", "36"])