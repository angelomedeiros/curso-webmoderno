function aleatorio({valorMin = 0, valorMax = 100}) {
  const valor = Math.random() * (valorMax - valorMin) + valorMin
  return Math.floor(valor)
}

const intervalo = { valorMin: 10, valorMax: 20 }
console.log(aleatorio({}))
console.log(aleatorio(intervalo))
