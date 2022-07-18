function climbing(input) {
    let index = 0
    let totalGroups = Number(input[index])
    index++

    let musala = 0
    let monblan = 0
    let kili = 0
    let k2 = 0
    let everest = 0
    let people = 0
    let totalPeople = 0

    for (let i = 0; i < totalGroups; i++) {
        people = Number(input[index])
        if (people <= 5) {
            totalPeople += people
            musala += people
        } else if (people >= 6 && people <= 12) {
            totalPeople += people
            monblan += people
        } else if (people >= 13 && people <= 25) {
            totalPeople += people
            kili += people
        } else if (people >= 26 && people <= 40) {
            totalPeople += people
            k2 += people
        } else {
            totalPeople += people
            everest += people
        }
    index++
    }
    console.log((musala / totalPeople * 100).toFixed(2) + "%")
    console.log((monblan / totalPeople * 100).toFixed(2) + "%")
    console.log((kili / totalPeople * 100).toFixed(2) + "%")
    console.log((k2 / totalPeople * 100).toFixed(2) + "%")
    console.log((everest / totalPeople * 100).toFixed(2) + "%")
}
climbing(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])