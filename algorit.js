// Exercício 5

// Crie um algoritmo que mostre ao usuário um menu com as seguintes opções e execute a operação correspondente à opção selecionada.
// a) Verificar se um aluno possui a idade mínima para se matricular no curso; calcule a idade a partir do ano de nascimento. Bônus para quem conseguir calcular a partir da data.
// b) Registre a frequência do aluno nos 5 dias do curso. Para cada dia deve ser atribuído o valor True para presença e o valor False para ausência. A frequência final será dada pela fórmula: Dias Presentes / Total Dias
// c) Calcular a média final com base nas 5 notas do aluno. As notas devem ser números decimais entre 0 e 10, e deve haver uma nota para cada dia.
// d) Dizer se o aluno está aprovado ou reprovado. Os critérios de aprovação são: nota final maior ou igual a 7.0 e frequência final maior ou igual a 75%.

const prompt = require('prompt-sync')()

console.log(`
  ------------------------ \n
  MENU \n
  a)Verificar Idade 
  b)Registrar Frequencia 
  c)Calcular Media 
  d)Dizer se o aluno está aprovado ou reprovado \n
  ------------------------
`)

const option = prompt("Digite a opção desejada do Menu: ").toUpperCase()

switch (option) {
  case 'A': 
    const dateBorn = parseInt(prompt("Digite seu ano de nascimento: "))
    const currentYear = new Date().getFullYear()
    let age = currentYear - dateBorn
    if(age >= 15) {
      console.log(
        `
          |                                                                   
          | Pode participar do curso - ${age} anos de idade, idade aceitavel  
          |                                                                   
        `
      )
    } else {
      console.log(
        `
          |                                                                     
          | Não participar do curso - ${age} anos de idade, idade não aceitavel 
          |                                                                     
        `
      )
    }
  break;

  case 'B':
    let dayPresents = 0
    for(let i = 1; i <= 5; i++) {
      const present = prompt(`Digite se voce esteve presente no dia ${i} - S/N: `)
      if(present.toUpperCase() === 'S') {

        dayPresents++;
      }
    }
    let frequencyFinal = dayPresents / 5
    console.log(
      ` 
        |
        | Frequencia final do aluno - ${frequencyFinal * 100}%
        |
      `
    )
  break;

  case 'C':
    let gradeSum = 0
    for(let i = 1; i <= 5; i++) {
      const grade = parseFloat(prompt(`Digite a nota do dia ${i} - 0 a 10 (pode conter numeros decimais): `))
      gradeSum += grade
    }
    console.log(`Total da nota antes de ser dividida - ${gradeSum.toFixed(2)}`) 
    let finalGrade = gradeSum / 5
    console.log(
      ` 
        |
        | A nota final do aluno é - ${finalGrade.toFixed(2)}
        |
      `
    )
  break;

  case 'D':
    let average = parseFloat(prompt("Digite a média do aluno: "))
    let frequency = parseFloat(prompt("Digite a frequencia do aluno: "))
    if(average >=7.0 && frequency >= 75) {
      console.log(
        ` 
          |
          | O aluno está aprovado com media de - ${average.toFixed(2)} e frequencia de - ${frequency}%
          |
        `
      )
    } else {
      console.log(
        ` 
          |
          | O aluno está reprovado com media de - ${average.toFixed(2)} e frequencia de - ${frequency}%
          |
        `
      )
    }
  break;

  default: 
  console.log("Opção Inválida - selecione A, B, C ou D ")
}
