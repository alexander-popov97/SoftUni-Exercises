function santa(input) {
    let paperCount = Number(input[0])
    let fabricCount = Number(input[1])
    let glueLitres = Number(input[2])
    let discountPercentage = Number(input[3])

    let paperPrice = paperCount * 5.80
    let fabricPrice = fabricCount * 7.20
    let gluePrice = glueLitres * 1.20

    let sum = paperPrice + fabricPrice + gluePrice

    let total = sum - (sum * (discountPercentage / 100))

    console.log(total.toFixed(3))
}

santa(["7", "8", "0.5", "45"])