function spaceTravel(input){
    let routes = input[0]
    let startingFuel = Number(input[1])
    let startingAmmo = Number(input[2])

    let routesArr = routes.split("||").join(" ")
    let splitRoutes = routesArr.split(" ")
    let index = 0
    let command = splitRoutes[index]
    index++
    let value = splitRoutes[index]
    index++
    for (let i = 0; i < splitRoutes.length; i++){

        switch (command){
            case 'Travel':
            if (startingFuel - value >= 0){
                startingFuel -= value
                console.log(`The spaceship travelled ${value} light-years.`)
            } else {
                console.log("Mission failed.")
                return;
            }

            break;

            case 'Enemy':
            if (startingAmmo < value && startingFuel < value * 2){
                console.log("Mission failed.")
                return;
            } else if (startingAmmo >= value){
                startingAmmo -= value
                console.log(`An enemy with ${value} armour is defeated.`)
            } else if (startingFuel >= value * 2){
                startingFuel -= value * 2
                console.log(`An enemy with ${value} armour is outmaneuvered.`)
            }

            break;

            case 'Repair':
            startingFuel += value
            console.log(`Ammunitions added: ${value * 2}.`)
            startingAmmo = startingAmmo + value * 2
            console.log(`Fuel added: ${value}.`)

            break;

            case 'Titan':
                console.log("You have reached Titan, all passengers are safe.")
                return;
        }

        command = splitRoutes[index]
        index++
        value = Number(splitRoutes[index])
        index++
    }
    console.log(splitRoutes)
}
spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"])