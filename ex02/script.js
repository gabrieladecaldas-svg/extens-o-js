
let posicoesMaiores = "";
let encontrouMaior = false;

for(let i = 0; i < 7; i++) {
    let idade = Number(prompt(`Digite a idade da pessoa ${i + 1}:`));
    if (idade > 25) {
            posicoesMaiores25 += encontrouMaior ? `, ${i}` : `${i}`;
            encontroMaior = true;
    }
}

if (encontroMaior) {
    alert(`As pessoas com mais de 25 anos estão nas posiçoes (indices): ${posicoesMaiores25}`);

} else {
    alert("Nenhuma pessoa cadastrada tem mais de 25 anos.");
}