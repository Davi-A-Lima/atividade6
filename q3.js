let idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "));
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "));
let idade3 = parseInt(prompt("Digite a idade da terceira pessoa: "));

let algumaMaior = (idade1 >= 18 || idade2 >= 18 || idade3 >= 18);

let todasMaiores = (idade1 >= 18 && idade2 >= 18 && idade3 >= 18);

let todasMenores = (idade1 < 18 && idade2 < 18 && idade3 < 18);

if (todasMaiores) {
    console.log("Todas as pessoas são maiores de idade.");
} else if (todasMenores) {
    console.log("Todas as pessoas são menores de idade.");
} else if (algumaMaior) {
    console.log("Alguma das pessoas é maior de idade.");
}
