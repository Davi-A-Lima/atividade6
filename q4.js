let dia = prompt("Digite o nome de um dia da semana: ").toLowerCase();

if (dia === "segunda" || dia === "terça" || dia === "quarta" || dia === "quinta" || dia === "sexta") {
    console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)}-feira é um dia útil.`);
} else if (dia === "sábado" || dia === "domingo") {
    console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia de fim de semana.`);
} else {
    console.log("O nome do dia digitado não é válido.");
}
