// criar uma variavel para armazenar o cpf
let cpf = "07980465970"

// criar uma variavel chamada somatorio
let soma1 = 0
let soma2 = 0
let veri1 = 0
let veri2 = 0
// separar cada numero do cpf em um item do array (replace, split)
let array = cpf.split('');

// verificar se a variavel tem 11 digitos
if (array.length != 11) {
    console.log("O CPF informado é invalido! Nao possui 11 algarismos.")
} else {
    // veri1: criar loop para multiplicar os digitos do cpf e somar na variavel somatorio
    for (let i = 0; i < 9; i++){
        soma1 += parseInt(array[i]) * (10-i)
    }}

    // calcular o resto da divisao por 11 da variavel somatorio 
    if(soma1 % 11  < 2){
        veri1 = 0
    } else if ((soma1%11) >= 2){
        veri1 = 11 - (soma1%11)

    // veri2
    for (let i = 0; i < 10; i++){
        soma2 += parseInt(array[i]) * (11-i)
    }

    // calcular o resto da divisao por 11 da variavel somatorio 
    if(soma2 % 11  < 2){
        veri2 = 0
    } else if ((soma2%11) >= 2){
        veri2 = 11 - (soma2%11)
}}
    // criar um condicionalpara verificar se o digito é valido
    if(veri1 == parseInt(array[9]) && veri2 == parseInt(array[10])){
        console.log("O CPF é valido")
    } else {
        console.log("O CPF é invalido")
    }