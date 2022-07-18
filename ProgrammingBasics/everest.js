function everest(input) {
    let index = 0
    let command = input[index]
    index++
    let currentMetres = Number(input[index])
    index++

    let days = 1
    let startingMetres = 5364
    let doneClimbing = false


    while (command !== "END") {
        
        if (startingMetres >= 8848) {
            doneClimbing = true
            break;
        }
        if (command === "Yes"){
            days++
            if (days > 5){
                doneClimbing = true
                console.log(`Failed!`)
                console.log(`${startingMetres}`)
                break;
            }
            startingMetres += currentMetres
        } else {
            startingMetres += currentMetres
        }


        command = input[index]
        index++
        currentMetres = Number(input[index])
        index++
    }

    if (doneClimbing == false) {
        console.log(`Failed!`)
        console.log(`${startingMetres}`)
    }

    if (startingMetres >= 8848) {
        doneClimbing = true
        console.log(`Goal reached for ${days} days!`)
    }
}

everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"])