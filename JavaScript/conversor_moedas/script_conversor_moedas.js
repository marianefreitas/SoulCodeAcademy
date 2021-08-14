function recebendo() {
    var tipo = valor = 0;
    valor = document.getElementById("valor").value
    tipo = document.getElementById("tipo_inserido").value

    switch (tipo) {
        case "real":
            converte_real(valor)
            break;
        case "usd":
            converte_usd(valor)
            break;
        case "cad":
            converte_cad(valor)
            break;
        case "euro":
            converte_euro(valor)
            break;
        case "libra":
            converte_libra(valor)
            break;
        case "peso":
            converte_peso(valor)
            break;
    }
}

function valida_valor() {
    var valor = 0;
    valor = document.getElementById("valor").value;

    if (isNaN(valor) || (valor == ""))
        document.getElementById("valor").style.backgroundColor = "red"
    else {
        valor = parseFloat(valor)
        document.getElementById("valor").style.background = "#f2f2f2"
    }
    console.log(valor)

}


function converte_real(valor) {
    real = valor
    usd = (valor * 0.1905).toFixed(2)
    cad = (valor * 0.2385).toFixed(2)
    euro = (valor * 0.1615).toFixed(2)
    libra = (valor * 0.1374).toFixed(2)
    peso = (valor * 18.05014).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function converte_usd(valor) {
    usd = valor
    real = (valor * 5.2485).toFixed(2)
    cad = (valor * 1.2516).toFixed(2)
    euro = (valor * 0.8478).toFixed(2)
    libra = (valor * 0.7212).toFixed(2)
    peso = (valor * 97.1050).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function converte_cad(valor) {
    cad = valor
    real = (valor * 4.1936).toFixed(2)
    usd = (valor * 0.7990).toFixed(2)
    euro = (valor * 0.6775).toFixed(2)
    libra = (valor * 0.5763).toFixed(2)
    peso = (valor * 77.5847).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function converte_euro(valor) {
    euro = valor
    real = (valor * 6.1910).toFixed(2)
    usd = (valor * 1.1796).toFixed(2)
    cad = (valor * 1.4762).toFixed(2)
    libra = (valor * 0.8508).toFixed(2)
    peso = (valor * 114.5451).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function converte_libra(valor) {
    libra = valor
    real = (valor * 7.2769).toFixed(2)
    usd = (valor * 1.3866).toFixed(2)
    cad = (valor * 1.7349).toFixed(2)
    euro = (valor * 1.1754).toFixed(2)
    peso = (valor * 134.6458).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function converte_peso(valor) {
    peso = valor
    real = (valor * 0.0541).toFixed(2)
    usd = (valor * 0.0103).toFixed(2)
    cad = (valor * 0.0129).toFixed(2)
    euro = (valor * 0.0087).toFixed(2)
    libra = (valor * 0.00743).toFixed(2)
    retorno(real, usd, cad, euro, libra, peso)
}

function retorno(real, usd, cad, euro, libra, peso) {
    document.getElementById("real").innerHTML = real;
    document.getElementById("usd").innerHTML = usd;
    document.getElementById("cad").innerHTML = cad;
    document.getElementById("euro").innerHTML = euro;
    document.getElementById("libra").innerHTML = libra;
    document.getElementById("peso").innerHTML = peso;
    
}
