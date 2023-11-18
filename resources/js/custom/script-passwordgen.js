

// #####################
//? Seção DOMContentLoaded
// #####################
document.addEventListener('DOMContentLoaded', function() {
    
    /* FUNCIONALIDADE ------------------------------|
     * Define valor padrão para o input range da senha.
     */
    let passgenLengthInput = document.getElementById('passgen-length');
    let valorPadrao = 16;
    passgenLengthInput.value = valorPadrao;

    /* FUNCIONALIDADE ------------------------------|
     * Atualiza o valor do contador de caracteres da senha ao carregar a página.
     */
    updateLengthCounter(passgenLengthInput, valorPadrao);

    /* FUNCIONALIDADE ------------------------------|
     * Adiciona um event listener para o evento 'input' no seletor de caracteres da senha.
     */
    passgenLengthInput.addEventListener('input', function() {
        updateLengthCounter(passgenLengthInput, valorPadrao);
    });

    //? |--------------------------------------------------------------------------------------------------------------------|

    /* FUNÇÃO ------------------------------|
     * Copia a senha gerada.
    */
    function copyPassWord() {
        const passText = document.getElementById("passgen-text");
        const passCopy = passText.value

        const textarea = document.createElement("textarea");
        textarea.value = passCopy;

        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");

        document.body.removeChild(textarea);
    }

    /* FUNÇÃO ------------------------------|
     * Muda o ícone do botão de copiar senha
     * quando chamada.
     */
    function changeIcon() {
        const iconCopyPass = document.getElementById("copy-pass-icon");
        iconCopyPass.classList.remove("fa-regular", "fa-copy");
        iconCopyPass.classList.add("fa-solid", "fa-check");

        setTimeout(function() {
            iconCopyPass.classList.remove("fa-solid", "fa-check");
            iconCopyPass.classList.add("fa-regular", "fa-copy");
        }, 3000);
    }

    /* FUNCIONALIDADE ------------------------------|
     * Adiciona um event listener para o evento 'click' no botão de copiar senha.
     */
    const btnCopyPass = document.getElementById("copy-pass-btn");
    btnCopyPass.addEventListener("click", function() {
        copyPassWord();
        changeIcon();
    });
});
/*END-DOMContentLoadedd*/

//? |--------------------------------------------------------------------------------------------------------------------|

/* FUNÇÃO ------------------------------|
 * Atualiza o valor do contador de caracteres da senha.
 */
function updateLengthCounter(passgenLengthInput, valorPadrao) {
    let lengthCounter = document.getElementById('passgen-lengthcounter');
    lengthCounter.textContent = passgenLengthInput.value || valorPadrao;
}

/* FUNÇÃO ------------------------------|
 * Gera uma senha personalizada com base nas opções selecionadas pelo usuário.
 */
function generatePass() {
    // Obtenção dos valores
    let txtPassWord = document.getElementById('passgen-text');
    let rangeLength = document.getElementById('passgen-length').value;
    let includeUppercase = document.getElementById('passgen-uppercase').checked;
    let includeLowercase = document.getElementById('passgen-lowercase').checked;
    let includeNumbers = document.getElementById('passgen-numbers').checked;
    let includeSymbols = document.getElementById('passgen-symbols').checked;
    let passWord = '';

    // Definição dos caracteres
    let characters = "";

    if (includeUppercase) characters = auxIncludeUppercase(characters);
    if (includeLowercase) characters = auxIncludeLowercase(characters);
    if (includeNumbers) characters = auxIncludeNumbers(characters);
    if (includeSymbols) characters = auxIncludeSymbols(characters);

    // Geração da senha
    if (characters.trim()) {
        for (let i = 0; i < rangeLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            passWord += characters.charAt(randomIndex);
        }
        txtPassWord.value = passWord;
    }
}

/**
 * Adiciona caracteres em maiúsculo à string fornecida.
 * @param {string} characters - A string de caracteres atual.
 * @returns {string} - A string de caracteres atualizada com maiúsculas.
 */
function auxIncludeUppercase(characters) {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return characters + uppercase;
}

/**
 * Adiciona caracteres em minúsculo à string fornecida.
 * @param {string} characters - A string de caracteres atual.
 * @returns {string} - A string de caracteres atualizada com minúsculas.
 */
function auxIncludeLowercase(characters) {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    return characters + lowercase;
}

/**
 * Adiciona números à string fornecida.
 * @param {string} characters - A string de caracteres atual.
 * @returns {string} - A string de caracteres atualizada com números.
 */
function auxIncludeNumbers(characters) {
    let numbers = "0123456789";
    return characters + numbers;
}

/**
 * Adiciona símbolos à string fornecida.
 * @param {string} characters - A string de caracteres atual.
 * @returns {string} - A string de caracteres atualizada com símbolos.
 */
function auxIncludeSymbols(characters) {
    let symbols = "!@#$%&*()´`{}[]~^?,.=+-";
    return characters + symbols;
}