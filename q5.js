function ehPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let N = parseInt(prompt("Digite um número inteiro N: "));

console.log(`Números primos menores que ${N}:`);
for (let i = 2; i < N; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}
