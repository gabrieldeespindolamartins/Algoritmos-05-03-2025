// calcular o resto da divisao por 11 da variavel somatorio 
// criar um condicionalpara verificar se o digito é valido

// criar uma variavel para armazenar o cpf
let cpf = 12345678900
// criar uma variavel chamada somatorio
let soma

    if (!isNaN(cpf)){
       cpf = cpf.toString()
    }

// separar cada numero do cpf em um item do array (replace, split)
let array = cpf.split('');

// verificar se a variavel tem 11 digitos
if (array.length != 11) {
    console.log("O CPF informado é invalido! Nao possui 11 algarismos.")
} else { 
    // criar loop para multiplicar os digitos do cpf e somar na variavel somatorio
    for (let i; i = 9; i++){
        soma += parseInt(array[i]) * (10 - i)
        
    }
    console.log(soma)
}


    
    
    
