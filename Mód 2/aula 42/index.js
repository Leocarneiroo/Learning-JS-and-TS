/* Escreva uma funçao que receven epaisagem que recebe 2 argumentos,
largura e altura de uma imagem (number).
Retrne true se a  imagem estiver no modo paisagem
*/

const ePaisagem = (largura, altura) => largura > altura;

/*function ePaisagem( largura, altura) {
    return largura > altura;
}*/

console.log(ePaisagem(1920, 1080));
