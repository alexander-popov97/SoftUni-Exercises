function anymalType(input) {

    let animal = input[0]

    switch(animal) {
        case "dog":
        console.log("mammal")    
        break;
        case "tortoise":
        case "crocodile":
        case "snake":
            console.log("reptile")
        break;
        default:
            console.log("unknown")
        break;
    }
}

anymalType(["dog"])