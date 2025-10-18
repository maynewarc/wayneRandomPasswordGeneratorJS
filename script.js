function generatePassword(length, withLowerCase, withUpperCase, withNumbers, withSpecialChars) {
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=<>?~";

    let myChars = "";
    let password = "";

    if (withLowerCase) myChars += lowerCases;
    if (withUpperCase) myChars += upperCases;
    if (withNumbers) myChars += numbers;
    if (withSpecialChars) myChars += symbols;

    if (length <= 0) {
        return "Password length cannot be zero (0) or lower!";
    }

    if (myChars === 0) {
        return "Select something as a password!";
    }

    for(let counter = 0;  counter < length; counter++) {
        const randomNum = Math.floor(Math.random() * myChars.length);
        password += myChars[randomNum];
    }
    return password;
}

function clickGenerate() {
    let passLength = document.getElementById("passLength").value;
    passLength = Number(passLength);
    const withLowerCase = true;
    const withUpperCase = true;
    const withNumbers = true;
    const withSpecialChars = true;

    const password = generatePassword(passLength, 
                                    withLowerCase, 
                                    withUpperCase, 
                                    withNumbers, 
                                    withSpecialChars);

    document.getElementById("myPassword").textContent = password;
}