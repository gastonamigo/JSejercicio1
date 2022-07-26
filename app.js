let base = prompt("Ingrese el numero");
let exponente = prompt("Ingrese la potencia");


let numero = parseInt(base);
let potencia = parseInt(exponente);
let resultado = numero;
if (potencia >= 0){
for (let i = 1; i < potencia ;i++) {
  
    resultado = numero * resultado;  

  console.log(resultado);
}
}else{
    alert("solo se admiten potencias positivas")
}
alert("El resultado es: " + resultado);