function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw 'Teste'
  throw {
    teste: 'Yes!',
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirTexto(obj) {
  try {
    console.log(obj.name.toUpperCase())
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('Final!!')
  }
}

const obj = { nome: 'Angelo' }
imprimirTexto(obj)