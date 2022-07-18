function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let buff = ""
        buff = buff + i + " "
        for (let j = 2; j <= i; j++) {
            buff = buff + i + " "
        }
        console.log(buff)
    }
}
triangle(6)