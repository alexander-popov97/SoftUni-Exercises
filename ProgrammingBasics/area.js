function areaOfFigure(input){
 
    let shape = input[0]
 
    if (shape === "square"){
        let a = Number(input[1])
        let area = a * a 
        console.log(area.toFixed(3))
    } else if (shape === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        let area = a * b
        console.log(area.toFixed(3))
    } else if (shape === "circle"){
        let r = Number(input[1])
        let area = Math.PI * (r * r)
        console.log(area.toFixed(3))
    } else if (shape === "triangle"){
        let h = Number(input[1])
        let b = Number(input[2])
        let area = h * b / 2
        console.log(area.toFixed(3))
    }
}
 
areaOfFigure(["circle", "6", "20"])