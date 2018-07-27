const valores = ['Angelo', 6, 'Medeiros', 8]
console.log(valores) // [ 'Angelo', 6, 'Medeiros', 8 ]
console.log(valores[2]) // Medeiros

valores[4] = 'Nóbrega'
console.log(valores) // [ 'Angelo', 6, 'Medeiros', 8, 'Nóbrega' ]
console.log(valores.length) // Retorna o tamanho: 5

valores.push(7) // Add um elemento no final do array: retorna o tamanho do array
console.log(valores) // [ 'Angelo', 6, 'Medeiros', 8, 'Nóbrega', 7 ]

valores.pop() // Retorna o valor excluido
console.log(valores) // [ 'Angelo', 6, 'Medeiros', 8, 'Nóbrega' ]

console.log(typeof valores) // object

