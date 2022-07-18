function rounding(num, dec){
    if (dec > 15){
        dec = 15
    }

    let roundedNumber = num.toFixed(dec)

    console.log(parseFloat(roundedNumber));
}

rounding(10.5,3)