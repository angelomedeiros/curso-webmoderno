let a = 3

global.b = '123'

this.c = 456
this.d = 555
this.e = { teste: 'Teste' }

console.log(a) // 3
console.log(global.b) // 123
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // true

console.log(global)
console.log(module.exports)
module.exports = {x: 'a'}
console.log(module.exports)