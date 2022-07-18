function computerStore(input){
    let index = 0
    let command = input[index]
    index++
    let price = 0
    let taxes = 0

    while (command !== 'regular' && command !== 'special'){
        if (Number(command) < 0){
            console.log('Invalid price!')
            continue;
        } else {
            price += Number(command)
            taxes += Number(command) * 0.2
        }

        command = input[index]
        index++

    }

    if (price === 0){
        console.log('Invalid order!')
        return;
    }

    if (command === 'special'){
    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${price.toFixed(2)}$`)
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log('-----------')
    console.log(`Total price: ${((price + taxes) * 0.90).toFixed(2)}$`)
    return;
    } else {
    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${price.toFixed(2)}$`)
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log('-----------')
    console.log(`Total price: ${(price + taxes).toFixed(2)}$`)
    return;
    }
}
computerStore(([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]))