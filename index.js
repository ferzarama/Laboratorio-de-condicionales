const primerNumeroTexto = prompt("Digita el primer número:");
const primerNumero = parseInt(primerNumeroTexto);

const segundoNumeroTexto = prompt("Digita el segundo número:");
const segundoNumero = parseInt(segundoNumeroTexto);

if (primerNumero > segundoNumero) {
  alert("El primer número es mayor.");
} else if (segundoNumero > primerNumero) {
  alert("El segundo número es mayor.");
} else {
  alert("Ambos números son iguales.");
}