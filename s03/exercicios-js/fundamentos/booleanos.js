let isAtivo = false
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('\nCasos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'string')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 'qualquer valor true'))

console.log('\nCasos verdadeiros...')
console.log(!!3)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nCasos verdadeiros...')
console.log(!!('' || NaN || 0 || 'Angelo'))

let valorDefault
console.log(valorDefault || NaN || false || 'Medeiros' )