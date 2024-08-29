let frase = prompt("Digite uma frase: ").toLowerCase();

let contadorVogais = 0;

for (let i = 0; i < frase.length; i++) {
    let char = frase[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        contadorVogais++;
    }
}

console.log(`A frase contém ${contadorVogais} vogais.`);
