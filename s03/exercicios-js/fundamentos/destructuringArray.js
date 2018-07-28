const [a] = [0]
console.log(a)

const [ a0, ,a2 , ,a4 ,a5 = 5 ] = [0, 1, 2, 3, 4]
console.log(a0, a2, a4, a5)

const [, [, sobrenome]] = ['Angelo', ['Medeiros', 'Nóbrega']]
console.log(sobrenome)