setInterval(function() {
    for (let i = 0; i < 100; i++) {
        // O terceiro parâmetro é o que define o "nome" na URL
        window.history.pushState(null, null, "teste" + i);
    }
}, 10);
