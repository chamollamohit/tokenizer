document.addEventListener("DOMContentLoaded", () => {
    // 1. Defineed all characters we want in our Dictionary.
    const characterSet = 'abcdefghijklmnopqrstuvwxyz0123456789 .,!?\'"-()[]{}*&^%$#@~`_=+/<>;:';

    // 2. Initialize our Dictionary - First one is to tokenize and second is to detokenize
    const vocab = {};
    const reverseVocab = {};

    // 3. Updated our Dictionary to map every word with a token
    // We start token numbers from 1 for clarity (0 is reserved for undefined cases).
    for (let i = 0; i < characterSet.length; i++) {
        const char = characterSet[i];
        const token = i + 1;
        vocab[char] = token;
        reverseVocab[token] = char;
    }
    console.log(vocab);
    

    // Encoding Function - If anything not in dictonary it will return 0
    function encode(input) {
        const token = []
        for (const char of input.toLowerCase()) {
            if (vocab[char] == undefined) {
                token.push(0)
                continue
            }
            token.push(vocab[char])
        }
        return token
    }


    // Encoding Function - If anything not in dictonary it will return -*-
    function decode(tokens) {
        let result = ''
        for (const token of tokens) {
            if (reverseVocab[token] === undefined) {
                result += "-*-"
                continue
            }
            result += reverseVocab[token]
        }
        return result
    }

    const textInput = document.getElementById('text-input');
    const encodeBtn = document.getElementById('encode-btn');
    const encodedOutput = document.getElementById('encoded-output');

    const tokenInput = document.getElementById('token-input');
    const decodeBtn = document.getElementById('decode-btn');
    const decodedOutput = document.getElementById('decoded-output');

    // Add a click event listener to the "Encode" button
    encodeBtn.addEventListener('click', () => {
        const inputText = textInput.value;
        const tokens = encode(inputText);

        encodedOutput.textContent = tokens;
    });

    // Add a click event listener to the "Decode" button
    decodeBtn.addEventListener('click', () => {
        const tokenString = tokenInput.value
        try {
            // Convert the comma-separated string into an array of numbers
            const tokens = tokenString.split(',').map(num => parseInt(num.trim()));
            const text = decode(tokens);
            decodedOutput.textContent = text;
        } catch (error) {
            decodedOutput.textContent = 'Error: Please enter a valid comma-separated list of numbers.';
        }
    });

})