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