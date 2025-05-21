const opcoes = ["Pedra", "Papel", "Tesoura"];
const imagens = [
  "img/punch_7476921.png", // Pedra
  "img/freepik__faça_uma_mao_aberta_em_formato_de_icone_com_5.png", // Papel
  "img/gesture.png"  // Tesoura
];

let vitorias = 0;
let derrotas = 0;
let empates = 0;

function jogar(escolhaJogador) {
  const escolhaComputador = Math.floor(Math.random() * 3);

  let resultado = "";
  if (escolhaJogador === escolhaComputador) {
    resultado = "Empate!";
    empates++;
  } else if (
    (escolhaJogador === 0 && escolhaComputador === 2) ||
    (escolhaJogador === 1 && escolhaComputador === 0) ||
    (escolhaJogador === 2 && escolhaComputador === 1)
  ) {
    resultado = "Você venceu!";
    vitorias++;
  } else {
    resultado = "Você perdeu!";
    derrotas++;
  }

  atualizarPlacar();

  document.getElementById("resultado").innerHTML = `
    <p>Você escolheu:</p>
    <img class="imagem-escolha" src="${imagens[escolhaJogador]}" alt="${opcoes[escolhaJogador]}">
    <p>Computador escolheu:</p>
    <img class="imagem-escolha" src="${imagens[escolhaComputador]}" alt="${opcoes[escolhaComputador]}">
    <p><strong>${resultado}</strong></p>
  `;
}

function sair() {
  // Zera as variáveis
  vitorias = 0;
  derrotas = 0;
  empates = 0;

  // Atualiza o placar na tela
  atualizarPlacar();

  // Mostra mensagem
  document.getElementById("resultado").innerHTML = "<p>Você saiu do jogo. Placar zerado.</p>";
}


function atualizarPlacar() {
  document.getElementById("vitorias").textContent = vitorias;
  document.getElementById("derrotas").textContent = derrotas;
  document.getElementById("empates").textContent = empates;
}



// Atalho via teclado: 0, 1, 2, 9
document.addEventListener("keydown", function(event) {
  const tecla = event.key;

  if (["0", "1", "2"].includes(tecla)) {
    jogar(Number(tecla));
  } else if (tecla === "9") {
    sair();
  }
});

