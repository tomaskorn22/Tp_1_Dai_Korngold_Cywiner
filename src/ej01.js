let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let invertido = texto1.split('').reverse().join('');
    let invertido2= texto2.split('').reverse().join('');
    let concatenado = invertido2 + invertido;   
    return concatenado;
}