let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let maior = Math.max(num1, num2, num3);

let menor = Math.min(num1, num2, num3);

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
