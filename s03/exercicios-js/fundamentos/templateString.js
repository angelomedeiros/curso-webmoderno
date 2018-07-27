const nome           = 'Angelo'
const concatenacao   = 'Olá ' + nome + '!'
const templateString = `
    Olá
    ${nome}
`

console.log(concatenacao, templateString)

console.log(`1 + 1 = ${1 + 1}`)

const up = t => t.toUpperCase()
console.log(`Ei... ${up('Peidão!')}`)