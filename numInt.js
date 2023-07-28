//2)

const prompt = require('prompt-sync')()

let num1 = parseInt(prompt("Digite o primeiro numero: "))
let operator = prompt("Digite o operador aritimetico - +(adição), -(subtração), *(multiplicação), /(divisão) : ")
let num2 = parseInt(prompt("Digite o segundo numero: "))

switch(operator) {
  case '+':
    console.log(`A soma de ${num1} + ${num2} = ${num1 + num2} `)
  break;
  case '-':
    console.log(`A subtração de ${num1} - ${num2} = ${num1 - num2} `)
  break;
  case '*':
    if(num2 == 0) {
      console.log('Todo numero multiplicado por 0 é zero')
    } else {
      console.log(`A multiplicação de ${num1} * ${num2} = ${num1 * num2} `)
    }
  break;
  case '/':
    if(num2 == 0){
      console.log('Não existe divisão por 0')
    } else {
      console.log(`A divisão de ${num1} / ${num2} = ${num1 / num2} `)
    }
  break;
  default:
    console.log("Operação Inválida!")
}
