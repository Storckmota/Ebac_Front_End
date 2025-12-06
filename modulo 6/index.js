// gera número secreto e define tentativas
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

// pega elementos que EXISTEM no seu HTML
const input = document.getElementById("chute");        // id="chute"
const mensagem = document.getElementById("resultado"); // id="resultado"
const tentativas = document.getElementById("tentativas");
const botao = document.getElementById("btnChutar");    // id="btnChutar"

// mostra o número inicial de tentativas
tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

// evento do botão
botao.addEventListener("click", function () {
  let chute = parseInt(input.value, 10);

  // validação
  if (isNaN(chute) || chute < 1 || chute > 100) {
    mensagem.textContent = "Digite um número entre 1 e 100!";
    return;
  }

  // se já acabou as tentativas não faz nada (proteção extra)
  if (tentativasRestantes <= 0) return;

  // lógica do jogo (sem while — cada clique é uma tentativa)
  if (chute === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou!";
    encerrar();
    return;
  }

  if (chute > numeroSecreto) {
    mensagem.textContent = "O número secreto é menor.";
  } else {
    mensagem.textContent = "O número secreto é maior.";
  }

  tentativasRestantes--;
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (tentativasRestantes === 0) {
    mensagem.textContent = `❌ Você perdeu! O número era ${numeroSecreto}.`;
    encerrar();
  }
});

function encerrar() {
  input.disabled = true;
  botao.disabled = true;
}
