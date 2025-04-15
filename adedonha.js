// sortear uma letra
// falar os temas
// pedir para aplicar as respostas 
// e validar se está tudo correto de acordo com a letra pedida
// pontuação

let readline = require("readline-sync");

let palavras = []; // armazena palavras
let temas = ["Nome", "animal", "Cidade", "Fruta", "Objeto" ]; // temas da adedonha

let pontuação = 0; // armazena pontuação, que inicia em 0


function gerarLetra() { // função para gerar letra aleatoria
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]; // gera um indice aleatorio e retorna a letra correspondente
 
}
let letraSorteada = gerarLetra() // retorna a letra sorteada
console.log(`A letra da vez é: ${letraSorteada}`);

let respostasUsuario = [] // armazena respostas do usuario

for (let i = 0; i < temas.length; i++) { // Loop para pedir as respostas do usuário
    let resposta = readline.question(`Comece digitando uma palavra para o tema "${temas[i]}":`); 
    respostasUsuario.push(resposta);


if(resposta.toUpperCase()[0] === letraSorteada) { // Verificar se a resposta começa com a letra sorteada
    console.log("Resposta validada!")
    pontuação += 10; // pontuação incrementada em 10 pontos
}
 else {
    console.log("não começa com a letra sorteada, tente no proximo tema")
}

}

console.log("Suas respostas foram: ") // retorna as respostas 
for ( let i = 0; i < temas.length; i++) {
    console.log(`${temas[i]}: ${respostasUsuario[i]}`)
}

console.log(`Pontuação final: ${pontuação}`) // retorna pontuação
