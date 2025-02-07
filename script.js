let mensagem = "Olá Mundo!"; //só o basico ne
alert(mensagem); //popup
function nometeste() {
  let nome = prompt("qual o seu nome?");
  let sobrenome = prompt("qual seu sobrenome?");
  let nomeCompleto = nome + " " + sobrenome;
  let entrega = "seja bem vindo, " + nomeCompleto + "!";
  alert(entrega);
} //para dizer oi para a pessoa
function calculo() {
  let nmr = Number(prompt("escreva um numero aleatorio para somar"));
  let nmr2 = Number(prompt("segundo numero aleatorio"));
  let resultado = nmr + nmr2;
  alert("a soma dos dois números é:" + " " + resultado);
} //para somar 2 números aleatórios
function multiplicação() {
  let nmr4 = Number(prompt("escreva um numero aleatorio para multiplicar"));
  let nmr5 = Number(prompt("segundo numero"));
  let resultado2 = nmr4 * nmr5;
  alert("a multiplicação dos dois números é:" + " " + resultado2);
} //para multiplicar 2 números aleatórios

function gerarnumero() {
  let numeroAleatorio = Math.floor(Math.random() * 2222); // Gera um número aleatório entre 0 e 2221
  document.getElementById("numeroDisplay").innerText =
    "Número Aleatório: " + numeroAleatorio;
}
console.log(mensagem); //oi para quem for ver o codigo no console
console.log("estou feliz"); //apenas uma mensagem kkk
