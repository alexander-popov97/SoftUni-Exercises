function everest(input) {
    let index = 0
    let command = input[index]
    index++
    let currentMetres = Number(input[index])
    index++

    let days = 1
    let startingMetres = 5364
    let doneClimbing = false
    let timesUp = false


    while (command !== "END" && days < 5 && startingMetres < 8848) {
        if (command === "Yes"){
            days++
            startingMetres += currentMetres
        } else {
            startingMetres += currentMetres
        }

        if (startingMetres >= 8848) {
            doneClimbing = true
            break;
        }

        if (days > 5){
            timesUp = true
            break;
        }
        command = input[index]
        index++
        currentMetres = Number(input[index])
        index++
    }

    if (timesUp == true) {
        console.log(`Failed!`)
        console.log(`${startingMetres}`)
    }

    if (doneClimbing == true) {
        console.log(`Goal reached for ${days} days!`)
    }
}