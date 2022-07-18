function cone(radius, height){

    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height
    let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
    let lateral = Math.PI * radius * slant
    let baseSurface = Math.PI * Math.pow(radius, 2)
    let totalSurfaceArea = lateral + baseSurface

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`)
}
cone(3,5)