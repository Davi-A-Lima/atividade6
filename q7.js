let numeros = [];

while (true) {
    let numero = parseFloat(prompt("Digite um número (digite 0 para parar): "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero); 
}

if (numeros.length > 0) {
    let maiorNumero = Math.max(...numeros);
    let menorNumero = Math.min(...numeros);

    // Exibe os resultados
    console.log(`O maior número da lista é: ${maiorNumero}`);
    console.log(`O menor número da lista é: ${menorNumero}`);
} else {
    console.log("Nenhum número foi inserido.");
}
