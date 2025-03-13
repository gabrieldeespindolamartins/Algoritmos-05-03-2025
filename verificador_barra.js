// os quatro primeior são os verificadores de paisses



// verificar codigo de empresas e paises
function encontrarTabela(itens, ean_sliced ){
    let encontrado = false
    for (let valor in itens){
        if(itens[valor] == ean_sliced ){
            encontrado = true
            return true
        }
    }

    if(!encontrado){
        return false;
    }
}


function vereficar(ean){
    // verificando se o ean tem 13 digitos
    if (ean.length != 13){
        return "O codigo inserido é invalido. Nao possui 13 algarismos!"
    } 

// tabela de paises
let paises = {
    'Brasil': '790',
    'China': '690',
    'Russia': '460'
}

// tabela de empreas
let empresas = {
    'EmpresaA': '1312',
    'EmpresaB': '6432',
    'EmpresaC': '9673'
}

    let ps = encontrarTabela(paises, ean.slice(0,3))
    if(!ps){
        return"O codigo EAN não apresenta um codigo de pais valido"
    }
    
    let emprs = encontrarTabela(empresas, ean.slice(3,7))
    if(!emprs){
        return"O codigo EAN não apresenta um codigo de empresa valido"
    }

    // calcular digito verificador e comparar
    ean = ean.split('')
    let soma = 0
    for (let i = 0; i<ean.length -1; i++) {
        //se numero par, multiplica por 3 e soma
        //se numero impar, multiplica por 1 e soma
        if(i % 2 != 0){
            soma += parseInt(ean[i] * 3)
        } else {
            soma += parseInt(ean[i])
        }
    }
    let digito = (10 - soma%10)%10
    if (digito != ean[12]){
        return 'codigo invalido'
    }
    //pega variavel soma e ver quanto falta para o proximo multiplo de 10




    return "O código EAN é válido.";
}


console.log(vereficar("7901312000005")) 