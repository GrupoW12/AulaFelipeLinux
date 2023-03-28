const listaDeFrutas = ['maça', 'amora', 'ok'];
require('dotenv').config();
const senha = process.env.SENHA;
const testeA = process.env.TESTE_SENHA;


listaDeFrutas.forEach(function(item, indice){
    console.log(item, indice);
})

let idadeAlunos = [16, 17, 18, 20, 30, 40];

/*idadeAlunos.push(13);
console.log(idadeAlunos);

idadeAlunos.unshift(13);
console.log(idadeAlunos);

idadeAlunos.pop();
console.log(idadeAlunos)*/

const teste = 4, a = 2;

let itensRemovidos = idadeAlunos.splice(teste, a);
console.log(idadeAlunos);
console.log(itensRemovidos);

console.log(senha);
console.log(testeA);