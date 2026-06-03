let todosNumeros = "";
let posicoesMultiplos10 = "";
let encontroMultiplo = false;

for (let i = 0; i < 15; i++) {
    let numero = Number(prompt(`Digite O ${i+1}° numero`));
    todosNumeros +=(i === 0) ? `${numero}` :`,${numero}`;

    if(numero % 10 === 0) {
        posicoesMultiplos10 += encontroMultiplo ? `,${i}` : `${i}`;
        encontroMultiplo = true;
    }
}

alert(`Vetor completo:[${todosNumeros}]`);
if (encontroMultiplo){
    alert(`Posiçoes dos multiplos de 10: [ ${posicoesMultiplos10}]`);
} else {
    alert("nenhum multiplo de 10 foi digitado.");
}