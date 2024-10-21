function fazerAlgoAleatorio() {
    const acoes = [
        mudarCorDeFundo,
        mostrarCitacaoInspiradora,
        adicionarEmojiAleatorio,
        tocarSomDivertido
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

function mostrarResultado(mensagem) {
    const container = document.getElementById('random-result');
    const result = document.createElement('div');
    result.className = 'result';
    result.textContent = mensagem;
    container.appendChild(result);
    setTimeout(() => result.remove(), 3000);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Nome: ' + document.getElementById('name').value + ', Email: ' + document.getElementById('email').value);
});

function adicionarComentario() {
    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = document.getElementById('new-comment').value;
    commentSection.appendChild(newComment);
    document.getElementById('new-comment').value = '';
}
