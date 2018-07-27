const escola = 'Universidade 4.0'

console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(2)) // Retorna o código decimal que indica o código do caracter no padrão unicode
console.log(escola.indexOf(' 4.0') + '\n')

console.log(escola.substring(0,12))
console.log(escola.substring(12))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(" 4.0", "!"))

console.log(escola.replace(/\d/, 'X')) // Substitui o primeiro número por X
console.log(escola.replace(/\d/g, 'X')) // Substitui todos os números por X
console.log(escola.replace(/\w/g, 'X')) // Substitui todos os caracteres por X

console.log('Angelo,Medeiros,Nóbrega'.split(',')) // Converte a string em um array