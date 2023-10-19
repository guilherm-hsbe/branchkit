/* FUNÇÃO ------------------------------|
 * Atualiza o texto aleatório a cada 2 segundos.
 * Gera um texto de 4 caracteres aleatórios, incluindo letras e números,
 * e o exibe no elemento "randomText".
 */
function generateRandomText() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@@##&&";
    let randomText = "";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomText += characters.charAt(randomIndex);
    }
    return randomText;
}

function updateRandomText() {
    const randomTextElement = document.getElementById("randomText");
    randomTextElement.style.opacity = 0;

    setTimeout(function () {
        randomTextElement.textContent = generateRandomText();
        randomTextElement.style.opacity = 1;
        setTimeout(updateRandomText, 2000);
    }, 250);
}
updateRandomText();