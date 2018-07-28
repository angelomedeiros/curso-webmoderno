/**
 * Criar uma variavel utilizando o var, essa variável só poderá ter dois tipos de escopos,
 * dentro de uma função ou no escopo global
 */

 /**
  * 
  */

console.log(a) // undefined
var a = 'angelo' 
console.log(a) // undefined


// Exemplo 1
console.log('\nExemplo 1')
var b = 1

function foo1() {
  console.log(b)
  var b = 2
  var b = 3 // Hoisting
  console.log(b)
}

foo1()

console.log(b)

// Exemplo 2
console.log('\nExemplo 2')
function foo2() {
  function bar() {
    return 3
  }

  return bar()
  // Acontece o hoisting da função abaixo, assim como com variáveis decladas com o var
  function bar() {
    return 8
  }
}

console.log(foo2())

// Exemplo 3
console.log('\nExemplo 3')
console.log(teste) // Acontece o hoisting da varirável, mas a função não pode ser executada
var teste = function() {} // Função anônima

// Exmplo 4
console.log('\nExemplo 4')
teste4('Hoisting')
function teste4 (a) {console.log(a)}