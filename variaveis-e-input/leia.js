const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout   
});

let variavel;
readLine.question('Qual é a sua idade?', input =>{
    variavel = input;
    console.log('Usuário tem idade de: ',variavel);
});