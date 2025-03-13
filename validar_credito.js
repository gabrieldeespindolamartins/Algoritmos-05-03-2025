function luhn(cartao) {
    let array = cartao.split('').reverse().map(Number);
    
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (i % 2 !== 0) { // Posições ímpares (considerando que o índice começa em 0)
            num *= 2;
            if (num > 9) {
                num -= 9;
            }
        }
        soma += num;
    }

    if (soma % 10 === 0) {
        return "O número de cartão de crédito é válido!";
    } else {
        return "O número de cartão de crédito é inválido!";
    }
}

console.log(luhn("123456789"));
