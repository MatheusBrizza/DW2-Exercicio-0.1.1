function contabilizarJuros(valorBoleto, diasAtraso) {
  const taxaJuros = 0.00033;

  const valorJuros = valorBoleto * taxaJuros * diasAtraso;
  const valorAtualizado = valorBoleto + valorJuros;
  return valorAtualizado;
}
const resultado = contabilizarJuros(1000, 40);
console.log(resultado);
