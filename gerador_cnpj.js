//gerar 8 numeros aleatorios
// adicionar o 0001 ao final dos 8 digitos
// gerar 13 digito = multiplicar pelo array 543298765432
// somar tudo, vereficar se resto é 2
// se for 0 ou 1 = 0, else é numero -11

function gerarCNPJ(){

let array = []
for (let i = 0; i < 8; i++){
    array.push(Math.floor(Math.random() * 10))
}
array.push(0, 0, 0, 1)


function calcularVerificador(cnpj, pesos){
    let soma = 0
    for (let i = 0; i< pesos.length; i++){
        soma += cnpj[i] * pesos[i]
    }
    let resto = soma % 11
    return resto < 2 ? 0 : 11 - resto 
}
let peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
let peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

const primeiroDigito = calcularVerificador(array, peso1)
array.push(primeiroDigito)

const segundoDigito = calcularVerificador(array, peso2)
array.push(segundoDigito)

return array 
    .join('')
    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3.$4-$5')
}
console.log(gerarCNPJ())