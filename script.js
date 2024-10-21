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
