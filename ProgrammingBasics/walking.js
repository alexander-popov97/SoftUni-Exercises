function walking(input) {

    let index = 0
    let command = input[index]
    let totalSteps = 0

    while (true) {
        if (command === "Going home") {
            index++
            command = input[index]
            totalSteps += Number(command)
            if (totalSteps >= 10000) {
                let diff = Math.abs(totalSteps - 10000)
                console.log(`Goal reached! Good job!`)
                console.log(`${diff} steps over the goal!`)
                break;
            } else {
                let diff = Math.abs(totalSteps - 10000)
                console.log(`${diff} more steps to reach goal.`)
                break;
            }
            
        } else {
            totalSteps += Number(command)
            index++
        }
        let diff = Math.abs(totalSteps - 10000)
        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`)
            console.log(`${diff} steps over the goal!`)
            break;
        }
        command = input[index]
    }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"])