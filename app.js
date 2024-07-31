let listaDeNumerosSorteados = [];
let qtdLimiteChutes = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  //resposiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMsgInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${qtdLimiteChutes}`);
}

exibirMsgInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativas = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
    let textoTentativas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativas} :) `;
    exibirTextoNaTela('p', textoTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor!')
    }
    else {
      exibirTextoNaTela('p', 'O número secreto é maior!')
    }
    numeroTentativas++;
    limparCampo();    
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * qtdLimiteChutes + 1);
  let qtdElementosLista = listaDeNumerosSorteados.length;

  if (qtdElementosLista == qtdLimiteChutes) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido); //push inclui ao final da lista.
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  numeroTentativas = 1;
  exibirMsgInicial();
  document.getElementById('reiniciar').setAttribute('disable', true);
}




