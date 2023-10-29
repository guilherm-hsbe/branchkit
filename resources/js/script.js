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

/* FUNÇÃO ------------------------------|
 * Copia o comando de cópia do repo e muda
 * o ícone do botão por três segundos.
 */
function copyGitClone() {
    const texto = document.getElementById("clone-repo-text");
    const textoParaCopiar = texto.innerText;

    const textarea = document.createElement("textarea");
    textarea.value = textoParaCopiar;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
}

function changeIcon() {
    const icone = document.getElementById("clone-repo-icon");
    icone.classList.remove("fa-regular", "fa-copy");
    icone.classList.add("fa-solid", "fa-check");

    setTimeout(function() {
        icone.classList.remove("fa-solid", "fa-check");
        icone.classList.add("fa-regular", "fa-copy");
    }, 3000);
}

const botao = document.getElementById("clone-repo-btn");
botao.addEventListener("click", function() {
    copyGitClone();
    changeIcon();
});