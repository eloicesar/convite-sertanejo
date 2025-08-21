const portaoAnimacao = document.getElementById('portaoAnimacao');
const conviteCard = document.getElementById('conviteCard');
const iniciarConviteBtn = document.getElementById('iniciar-convite-btn');
const btnSimBaile = document.getElementById('btn-sim-baile');
const btnNaoBaile = document.getElementById('btn-nao-baile');
const inputRespostaBaile = document.getElementById('resposta-baile');
const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const eventoPopup = document.getElementById('evento-popup');
const musicaBaile = document.getElementById('musica-baile');
const playPauseBtn = document.getElementById('play-pause-btn');

// Botão para iniciar o convite
iniciarConviteBtn.addEventListener('click', () => {
  iniciarConviteBtn.style.display = 'none';
  conviteCard.classList.add('show');
  abrirPortao();
  musicaBaile.play();
  playPauseBtn.textContent = '⏸️';
});

// Função para iniciar a animação de abertura do portão
function abrirPortao() {
    portaoAnimacao.classList.add('portao-aberto');
}

// Evento para o botão "Sim"
btnSimBaile.addEventListener('click', () => {
    inputRespostaBaile.value = 'Sim';
    // Submete o formulário
    document.querySelector('form').submit();
});

// Evento para o botão "Não"
btnNaoBaile.addEventListener('click', () => {
    inputRespostaBaile.value = 'Nao';
    // Submete o formulário
    document.querySelector('form').submit();
});

// Lógica do Popup (Modal)
openPopupBtn.addEventListener('click', () => {
  eventoPopup.classList.add('show');
});

closePopupBtn.addEventListener('click', () => {
  eventoPopup.classList.remove('show');
});

// Fechar o popup clicando no overlay
eventoPopup.addEventListener('click', (event) => {
  if (event.target === eventoPopup) {
    eventoPopup.classList.remove('show');
  }
});

// Lógica para tocar/pausar a música
playPauseBtn.addEventListener('click', () => {
    if (musicaBaile.paused) {
        musicaBaile.play();
        playPauseBtn.textContent = '▶️';
    } else {
        musicaBaile.pause();
        playPauseBtn.textContent = '⏸️';
    }
});
