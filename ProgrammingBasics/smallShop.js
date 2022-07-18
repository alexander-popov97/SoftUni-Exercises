function smallShop(input) {

    let productName = input[0]
    let city = input[1]
    let quantity = Number(input[2])

    let coffeePrice = 0
    let waterPrice = 0 
    let beerPrice = 0  
    let sweetsPrice = 0 
    let peanutsPrice = 0

    switch(city) {

        case "Sofia":
        coffeePrice = 0.50
        waterPrice = 0.80
        beerPrice = 1.20
        sweetsPrice = 1.45
        peanutsPrice = 1.60

        if (productName === "coffee") {
            console.log(coffeePrice * quantity)
        } else if (productName === "water") {
            console.log(waterPrice * quantity)
        } else if (productName === "beer") {
            console.log(beerPrice * quantity)
        } else if (productName === "sweets") {
            console.log(sweetsPrice * quantity)
        } else if (productName === "peanuts") {
            console.log(peanutsPrice * quantity)
        }
        
        break;
        case "Plovdiv":
        coffeePrice = 0.40
        waterPrice = 0.70
        beerPrice = 1.15
        sweetsPrice = 1.30
        peanutsPrice = 1.50

        if (productName === "coffee") {
            console.log(coffeePrice * quantity)
        } else if (productName === "water") {
            console.log(waterPrice * quantity)
        } else if (productName === "beer") {
            console.log(beerPrice * quantity)
        } else if (productName === "sweets") {
            console.log(sweetsPrice * quantity)
        } else if (productName === "peanuts") {
            console.log(peanutsPrice * quantity)
        }

        break;
        case "Varna":
        coffeePrice = 0.45
        waterPrice = 0.70
        beerPrice = 1.10
        sweetsPrice = 1.35
        peanutsPrice = 1.55

        if (productName === "coffee") {
            console.log(coffeePrice * quantity)
        } else if (productName === "water") {
            console.log(waterPrice * quantity)
        } else if (productName === "beer") {
            console.log(beerPrice * quantity)
        } else if (productName === "sweets") {
            console.log(sweetsPrice * quantity)
        } else if (productName === "peanuts") {
            console.log(peanutsPrice * quantity)
        }
        
        break;
    }

}

smallShop(["water", "Plovdiv", "2"])