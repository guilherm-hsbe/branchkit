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

/* FUNÇÃO ------------------------------|
 * Atualiza o 'last-commit-date' com a data do último commit.
 * utiliza API do GitHub para obter as informações de commit do repo.
 */
const apiUrl = 'https://api.github.com/repos/guilherm-hsbe/BranchKit/commits/main';
async function fetchLastCommitDate() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const commitDate = new Date(data.commit.committer.date);
        const formattedDate = commitDate.toLocaleDateString();
        document.getElementById('last-commit-date').textContent = formattedDate;
    } catch (error) {
        console.error('(erro ao buscar o último commit:', error, ')');
        document.getElementById('last-commit-date').textContent = '(erro ao buscar a data do último commit.)';
    }
}
fetchLastCommitDate();
