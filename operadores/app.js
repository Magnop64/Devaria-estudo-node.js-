const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('aula de operadores logicos e estruturas de seleção.')
console.log('vamos verificar idade e habilitação e se seu nome está na lista.')

readLine.question('Qual o ano de nascimento?', ano =>{
    if(ano > 2004){
        console.log('voçe nao tem idade para dirigir.'); 
    }else{
        readLine.question("Voçe tem habilitação?(sim/nao)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voçe nao tem permissão para dirigir.');
            }else{
                readLine.question("Qual o seu nome?", nome =>{
                    switch(nome){
                        case 'Erica':
                            console.log('Boa viagem Erica');
                            break;
                        case 'Ana':
                            console.log('Boa viagem Ana');
                            break;
                        default:
                            console.log('Voçe nao tem autorização para dirigir este veiculo.');
                            break;
                    }
                })
            }
        })
    }
});