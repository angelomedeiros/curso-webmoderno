const pessoa = {
  nome: 'Angelo',
  idade: 23,
  endereco: {
    logradouro: 'Rua XXX XXXXX',
    numero: 89
  }
}

const { nome, idade } = pessoa
console.log(nome, idade, pessoa)

const { nome: n, endereco: { numero, cep = 123 } } = pessoa // Valor padrão e destruturing de destruturing
console.log(n, numero, cep)

const { naoExiste } = pessoa
console.log(naoExiste) // undefined

// const { naoExisteTambem: { naoExisteFilho } } = pessoa // Retorna erro pois naoExisteTambem é um valor undefined e isso impossibilita de fazer o destructuring (obviamente)
