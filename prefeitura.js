const chalk = require('chalk');

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99, -32];

let listaOb = [];
let listaFa = [];
let listaNe = [];

const organizaIdade = () => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] >= 18 && lista[i] <= 60){
            listaOb.push(lista[i]);
        } else if(lista[i] >= 16 && lista[i] <= 17 || lista[i] >= 70){
            listaFa.push(lista[i]);
        } else if(lista[i] < 16 && lista[i] >= 0){
            listaNe.push(lista[i]);
        } else {
            //console.log(chalk.red(`Valor invalido: ${lista[i]}.`))
        }
    }
}

organizaIdade();

let obrigatorio = "";
let facultativo = "";
let nEleitor = "";

/*const ordemCrescente = () => {
    let valorAnterior = Math.min(...listaOb);
    obrigatorio = valorAnterior;
    for(let i = 0; i < listaOb.length; i++){
        if(valorAnterior < listaOb[i]){
            valorAnterior = listaOb[i];
            console.log(valorAnterior);
        }
    }
}*///Falta terminar

const valorSemOrdem = () => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] >= 18 && lista[i] <= 60){
            if(obrigatorio == ""){
                obrigatorio = lista[i];
            } else {
                obrigatorio += ", " + lista[i];
            }
        } else if(lista[i] >= 16 && lista[i] <= 17 || lista[i] >= 70){
            if(facultativo == ""){
                facultativo = lista[i];
            } else{
                facultativo += ", " + lista[i];
            }
        } else if(lista[i] < 16 && lista[i] >= 0){
            if(nEleitor == ""){
                nEleitor = lista[i];
            } else {
                nEleitor += ", " + lista[i];
            }
        } else {
            console.log(chalk.red(`Valor invalido: ${lista[i]}.`))
        }
    }
}

valorSemOrdem();

console.log(chalk.magenta(`Obrigatório: `)+chalk.cyan(`${obrigatorio}.\n`)+
    chalk.magenta(`Facultativo: `)+chalk.cyan(`${facultativo}.\n`)+
    chalk.magenta(`Não eleitor: `)+chalk.cyan(`${nEleitor}.`)
)

ordemCrescente();

