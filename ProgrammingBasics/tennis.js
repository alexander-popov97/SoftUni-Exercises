function tennis(input) {
    let index = 0
    let totalGames = Number(input[index])
    index++
    let startingPoints = Number(input[index])
    index++

    let wCount = 0
    let totalPoints = 0

    for (let i = 0; i < totalGames; i++) {
        let game = input[index]

        if (game === "W") {
            wCount++
            totalPoints += 2000
        } else if (game === "F") {
            totalPoints += 1200
        } else if (game === "SF") {
            totalPoints += 720
        }
        index++
    }

    let avg = Math.floor(totalPoints / totalGames)
    let avgWinRate = wCount / totalGames * 100
    console.log(`Final points: ${totalPoints + startingPoints}`)
    console.log(`Average points: ${avg}`)
    console.log(avgWinRate.toFixed(2) + "%")
}
tennis(["5", "1400", "F", "SF", "W", "W", "SF"])