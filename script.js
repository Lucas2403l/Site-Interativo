function adicionarEmoji(emoji) {
    const container = document.getElementById('emoji-container');
    const newEmoji = document.createElement('span');
    newEmoji.className = 'emoji';
    newEmoji.textContent = emoji;
    container.appendChild(newEmoji);
}

function removerUltimoEmoji() {
    const container = document.getElementById('emoji-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function mudarEmoji() {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.textContent = '🥳';
    });
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
