const prompt = require("prompt-sync")()

let realValue = parseFloat(prompt("Digite o valor em reais(R$): ")) 
let coins = prompt("Digite a moeda desejada - (dolares, libras estelinas, guaranies, ienes) : ")

//Valores das cotações das moedas no dia 28-07-2023
Dolar = 4.75, Libra = 6.11, Guarani = 0.00065, iene = 0.034

switch (coins) {
  case 'dolar' :
    const realToDolar = realValue / 4.75
    console.log(`O valor convertido de reais para doláres é R$${realToDolar}`)
  break;
  case 'libras' :
    const realToLibre = realValue / 6.11
    console.log(`O valor convertido de reais para doláres é R$${realToLibre}`)
  break;
  case 'guaranies' :
    const realToguarani = realValue / 0.00065
    console.log(`O valor convertido de reais para doláres é R$${realToguarani}`)
  break;
  case 'ienes' :
    const realToIene = realValue / 0.034
    console.log(`O valor convertido de reais para doláres é R$${realToIene}`)
  break;
  default: 
  console.log("Erro - Seleção Inválida")
}

// const prompt = require("prompt-sync")()

// function converterCoin(valorInReal, coin){
//   switch(coin) {
//   case 'dolar' :
//   return valorInReal / 4.75

//   case 'libras' :
//   return valorInReal / 6.11

//   case 'guaranies' :
//   return valorInReal / 0.00065

//   case 'ienes' :
//   return valorInReal / 0.034

//   default: 
//     console.log("Erro - Seleção Inválida")
//   }
// }

// let valorInReal = parseFloat(prompt("Digite o valor em real: "))
// let coin = prompt("Digite a moeda desejada - dolar, libras, guaranies, ienes: ")

// const result = converterCoin(valorInReal, coin);

// if(typeof result === 'number'){
//   console.log(`O valor convertido de ${valorInReal} para ${coin} = ${result.toFixed(2)}`)
// }