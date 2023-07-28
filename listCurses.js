//1)

const prompt = require('prompt-sync')()

let cursesList = "TI, ADS, SI, ENGSOFT, CCOMPT";
console.log(`Todos os cursos disponiveis - ${cursesList}`)

const curses = prompt("Digite o curso pretendido aqui: ");


switch (curses) {
  case 'TI':
    console.log('O usúario escolheu: Tecnologia da Informação - TI');
    break;
  case 'ADS':
    console.log('O usúario escolheu: Analise e Desenvolvimento de Sistemas - ADS');
    break
  case 'SI':
    console.log('O usúario escolheu: Sistemas de Informação - SI');
    break;
  case 'ENGSOFT':
  console.log('O usúario escolheu: Engenharia de Software - ENGSOFT');
    break;
  case 'CCOMPT':
  console.log('O usúario escolheu: Ciências da computação - CCOMPT');
    break;
  default:
    console.log('Curso Inexistente!');
}
