"use strict";
exports.__esModule = true;
var pontos_jogador1 = 0;
var pontos_jogador2 = 0;
function lancarDados() {
    //
    var jogadas = 5;
    var i = 0;
    var x = 0;
    var y = 0;
    while (i < jogadas) {
        i += 1;
        x = obterInt(1, 6);
        y = obterInt(1, 6);
        //Soma dos resultados de cada jogador.
        pontos_jogador1 += x;
        pontos_jogador2 += y;
    }
    return "Jogador 1: " + pontos_jogador1 + " Pontos! \nJogador 2: " + pontos_jogador2 + " Pontos! \n ";
}
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda para cima
    max = Math.floor(max); //arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(lancarDados());
