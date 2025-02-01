document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes");
    const explosion = document.getElementById("explosion");
    const loveMessage = document.getElementById("loveMessage");
    const tulipsContainer = document.getElementById("tulipsContainer");

    yesButton.addEventListener("click", function() {
        // Mostrar la explosión
        if (explosion) {
            explosion.style.display = "block"; // Muestra la explosión
        }

        setTimeout(() => {
            // Ocultar la explosión y mostrar el mensaje de amor
            if (explosion) {
                explosion.style.display = "none"; // Oculta la explosión
            }
            if (loveMessage) {
                loveMessage.style.display = "block"; // Muestra el mensaje de amor
            }
        }, 4000); // La explosión dura 4 segundos

        setTimeout(() => {
            // Mostrar los tulipanes después del mensaje de amor
            if (tulipsContainer) {
                tulipsContainer.style.display = "block"; // Muestra los tulipanes
            }
        }, 5000); // Los tulipanes aparecen después de 5 segundos
    });
});