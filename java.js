// JavaScript para manejar la interacción del botón

// Selecciona el botón y el mensaje sorpresa
const loveButton = document.getElementById('loveButton');
const surpriseMessage = document.getElementById('surpriseMessage');

// Agrega un evento de clic al botón
loveButton.addEventListener('click', () => {
    // Alterna la clase 'hidden' en el mensaje sorpresa
    if (surpriseMessage.classList.contains('hidden')) {
        surpriseMessage.classList.remove('hidden');
    } else {
        surpriseMessage.classList.add('hidden');
    }
});
