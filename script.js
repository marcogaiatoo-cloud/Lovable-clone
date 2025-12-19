// script.js - Este arquivo adiciona interatividade ao site

// Exemplo de manipulação de eventos
function mostrarMensagem() {
    alert('Olá! Este site agora é interativo.');
}

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('meuBotao');
    if (botao) {
        botao.addEventListener('click', mostrarMensagem);
    }
});