function triangle (n) {
    let row = []
    for (let i = 1; i <= n; i++){
        row.push(i)
        console.log(row.join(' '))
    }
}
triangle (6)