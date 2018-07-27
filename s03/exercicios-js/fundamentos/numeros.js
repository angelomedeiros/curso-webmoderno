const peso1 = 1
const peso2 = 2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.501
const avaliacao2 = 7.023

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('Sua média foi %f!', media.toFixed(3))
console.log(media.toString(2)) // Converte para binário