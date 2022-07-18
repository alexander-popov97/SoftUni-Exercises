function sumDigits(num) {
	let arrNum = String(num).split('')
	let sum = 0

	for (let i = 0; i < arrNum.length; i++) {
		sum += Number(arrNum[i])
	}
	console.log(sum)
}
sumDigits(4567)
