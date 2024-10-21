function fazerAlgoAleatorio() {
    const acoes = [
        mudarCorDeFundo,
        mostrarCitacaoInspiradora,
        adicionarEmojiAleatorio,
        tocarSomDivertido,
        mostrarNoticiaAleatoria
    ];
    const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
    acaoAleatoria();
}

function mudarCorDeFundo() {
    const cores = ['#f0f8ff', '#faebd7', '#7fffd4', '#ffe4c4', '#ffebcd'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
    mostrarResultado(`Cor de fundo alterada para ${corAleatoria}`);
}

function mostrarCitacaoInspiradora() {
    const citacoes = [
        "A vida é o que acontece enquanto você está ocupado fazendo outros planos. – John Lennon",
        "A felicidade não é algo pronto. Ela vem das suas próprias ações. – Dalai Lama",
        "Não importa quão devagar você vá, desde que você não pare. – Confúcio"
    ];
    const citacaoAleatoria = citacoes[Math.floor(Math.random() * citacoes.length)];
    mostrarResultado(citacaoAleatoria);
}

function adicionarEmojiAleatorio() {
    const emojis = ['😊', '😂', '😍', '😎', '🥳', '🤔', '🥺'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    const container = document.getElementById('random-result');
    const newEmoji = document.createElement('span');
    newEmoji.className = 'emoji animate__animated animate__bounceIn';
    newEmoji.textContent = emojiAleatorio;
    container.appendChild(newEmoji);
}

function tocarSomDivertido() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/mlg-airhorn.mp3');
    audio.play();
    mostrarResultado("Tocando som divertido!");
}

function mostrarNoticiaAleatoria() {
    const noticias = [
        "Notícia 1: Importante evento acontecendo agora!",
        "Notícia 2: Tecnologia avançando a passos largos.",
        "Notícia 3: Descoberta surpreendente revelada."
    ];
    const noticiaAleatoria = noticias[Math.floor(Math.random() * noticias.length)];
    mostrarResultado(noticiaAleatoria);
}

function mostrarResultado(mensagem) {
    const container = document.getElementById('random-result');
    const result = document.createElement('div');
    result.className = 'result';
    result.textContent = mensagem;
    container.appendChild(result);
    setTimeout(() => result.remove(), 3000);
}

function mudarCorCarta(carta) {
    const cores = ['#ffebcd', '#7fffd4', '#faebd7', '#ffe4c4'];
    const corAleatoria = cores[_{{{CITATION{{{_1{](https://github.com/ricardo-cas/pandas/tree/eefd8f3ed9250c15e029b7ae59a24ef9f7ffc4ab/GUIA_MARKDOWN.MD)[_{{{CITATION{{{_2{](https://github.com/shreyas1925/dbms-sem-lab/tree/3aa3299e61d55f6a565f56a86a6a4695844d4e6c/update.php)[_{{{CITATION{{{_3{](https://github.com/Jervi-sir/boxy/tree/039f41926d97cacff7cee66fc9578985f429cd74/resources%2Fviews%2Fauth%2Flogin.blade.php)