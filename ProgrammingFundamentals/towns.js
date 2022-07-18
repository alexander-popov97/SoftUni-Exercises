function towns(arr) {
	for (let i = 0; i < arr.length; i++) {
		let str = arr[i].split(' | ')
		let obj = {}
		obj.town = str[0]
		obj.latitude = Number(str[1]).toFixed(2)
		obj.longitude = Number(str[2]).toFixed(2)
		console.log(obj)
	}
}
towns(['Plovdiv | 136.45 | 812.575'])
