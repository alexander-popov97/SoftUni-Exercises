function vacation (count, type, day){
    let pricePerPerson = 0
    let totalPrice = 0
    switch(day) {
        case 'Friday':
            if (type === 'Students'){
                pricePerPerson = 8.45
                if (count >= 30) {
                    totalPrice = (count * pricePerPerson) * 0.85
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Business'){
                pricePerPerson = 10.90
                if (count >= 100) {
                    totalPrice = (count * pricePerPerson) - (pricePerPerson * 10)
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Regular') {
                pricePerPerson = 15
                if (count >= 10 && count <= 20) {
                    totalPrice = (count * pricePerPerson) * 0.95
                } else {
                    totalPrice = count * pricePerPerson
                }
            }
        break;
        case 'Saturday':
            if (type === 'Students'){
                pricePerPerson = 9.80
                if (count >= 30) {
                    totalPrice = (count * pricePerPerson) * 0.85
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Business'){
                pricePerPerson = 15.60
                if (count >= 100) {
                    totalPrice = (count * pricePerPerson) - (pricePerPerson * 10)
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Regular') {
                pricePerPerson = 20
                if (count >= 10 && count <= 20) {
                    totalPrice = (count * pricePerPerson) * 0.95
                } else {
                    totalPrice = count * pricePerPerson
                }
            }    
        break;
        case 'Sunday':
            if (type === 'Students'){
                pricePerPerson = 10.46
                if (count >= 30) {
                    totalPrice = (count * pricePerPerson) * 0.85
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Business'){
                pricePerPerson = 16
                if (count >= 100) {
                    totalPrice = (count * pricePerPerson) - (pricePerPerson * 10)
                } else {
                    totalPrice = count * pricePerPerson
                }
            } else if (type === 'Regular') {
                pricePerPerson = 22.50
                if (count >= 10 && count <= 20) {
                    totalPrice = (count * pricePerPerson) * 0.95
                } else {
                    totalPrice = count * pricePerPerson
                }
            }    
        break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40, "Regular", "Saturday")