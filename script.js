const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function perguntar() {
    rl.question("Digite um número: \n(para finalizar o programa digite 'sair'.)", (number) => {
    console.log(number);
    let num = parseInt(number);
    if(number == "sair"){
        parar();
    }else if(isNaN(num)) {
        console.log("O dado inserido pelo usuário não é válido!");
    }else if(num % 2 === 0) {
        console.log(num, "é par.")
    }else {
        console.log(num, "é ímpar.")
    };
    perguntar();
});
};

perguntar();

function parar() {
    rl.close();
    console.log("Programa finalizado!");
    process.exit(0);
};