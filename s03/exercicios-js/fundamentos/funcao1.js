function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(1, 2)
imprimirSoma(1)
imprimirSoma(1, 2, 3, 4)

function imprimirSubtracao(a, b = 10) {
  console.log(a - b)
}

imprimirSubtracao(100)
imprimirSubtracao(100, 90)