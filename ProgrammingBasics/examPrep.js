function examPrep(input) {
    let index = 0
    let maxBadGrades = Number(input[index])
    index++
    let problemName = input[index]
    index++
    let currentGrade = Number(input[index])

    let gradesCount = 0
    let problemsCount = 0
    let badGrade = 0

    while (problemName !== "Enough") {
        if (maxBadGrades <= badGrade) {
            console.log(`You need a break, ${badGrade} poor grades.`)
            break;
        }

        if (currentGrade <= 4) {
            badGrade++
        }
        gradesCount += currentGrade
        problemsCount++
        index++
        problemName = input[index]
        index++
        currentGrade = Number(input[index])
    }
    let avgScore = gradesCount / problemsCount
    if (problemName === "Enough") {
        console.log(`Average score: ${avgScore.toFixed(2)}`)
        console.log(`Number of problems: ${problemsCount}`)
        console.log(`Last problem: ${input[index-3]}`)
    }

}
examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])