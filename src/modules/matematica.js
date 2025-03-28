// Defino la constante PI
export const PI = 3.14;

// Defino las funciones
export function sumar(x, y) {
  return x + y;
}

export function restar(x, y) {
  return x - y;
}

// Uso arrow functions para multiplicar y dividir
export const multiplicar = (a, b) => a * b;

export const dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

// Array con los números en texto
export const numerosTexto = ["dos", "cuatro", "ocho", "diez"];
