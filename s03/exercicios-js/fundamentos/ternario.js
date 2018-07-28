const resultado = nota => {
  if (nota >= 7) {
   console.log('Aprovado') 
  } else if (nota < 7) {
    console.log('Reprovado')
  } else {
    console.log('Valor inválido')
  }
}

resultado('7.8') // aprovado

const resultado2 = nota => nota >= 7 ? console.log('Aprovado') : console.log('Reprovado')

resultado2('6.8') // reprovado