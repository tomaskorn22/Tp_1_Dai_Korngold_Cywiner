const currencyMap = require('currency-map-country');

function obtenerMoneda(codigoPais) {
    const countryData = currencyMap.findByAlpha3(codigoPais);
    return countryData ? countryData.currency : null;
}

// Ejemplo de uso
let monedaDelPais, codigoPais;

codigoPais = 'ARG'; 
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA'; 
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);