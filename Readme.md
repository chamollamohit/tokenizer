# JavaScript Text Tokenizer

A simple, self-contained web application for text tokenization. This tool, built with vanilla JavaScript, HTML, and CSS, allows you to convert text into a sequence of numerical tokens based on a defined character vocabulary and decode them back into text. It's a great demonstration of fundamental Natural Language Processing (NLP) concepts.



***

## Features

* **Text-to-Token Encoding**: Converts input text into an array of numbers.
* **Token-to-Text Decoding**: Reconstructs text from a sequence of number tokens.
* **Custom Vocabulary**: The character set is defined in a single string and can be easily modified.
* **Unknown Character Handling**: Gracefully manages characters not present in the vocabulary by assigning a special token (`0`).
* **Case-Insensitive**: The default encoder treats uppercase and lowercase letters as the same token.
* **No Dependencies**: The entire application is contained in a single `index.html` file and runs in any modern browser without needing external libraries or a build process.

***

## How to Use

1.  **Download the file**: Get the `index.html` file.
2.  **Open in Browser**: Open the `index.html` file directly in any modern web browser (like Google Chrome, Mozilla Firefox, or Microsoft Edge).
3.  **Use the Application**:
    * **To Encode**: Type or paste text into the "Encode Text to Tokens" box and click the "Encode" button. The corresponding number tokens will appear below.
    * **To Decode**: Type or paste a comma-separated list of numbers into the "Decode Tokens to Text" box and click the "Decode" button. The reconstructed text will appear below.

***

## How It Works

The application's logic is contained within a `<script>` tag in the `index.html` file.

### 1. Vocabulary Generation

Upon loading, a vocabulary is programmatically generated from a `characterSet` string.
* `vocab`: An object that maps each character to a unique number (e.g., `{ 'a': 1, 'b': 2, ... }`).
* `reverseVocab`: An object that maps each number back to its character (e.g., `{ 1: 'a', 2: 'b', ... }`).

### 2. Encoding (`encode()` function)

The `encode()` function takes a string as input, converts it to lowercase, and iterates through each character.
* If the character exists in the `vocab`, its corresponding number is added to the output array.
* If the character is not found (e.g., an emoji), it is mapped to the special "unknown" token `0`.

### 3. Decoding (`decode()` function)

The `decode()` function takes an array of numbers as input.
* It looks up each number in the `reverseVocab` and appends the corresponding character to the result string.
* If it encounters the unknown token `0`, it appends a placeholder string `"--"` to the result.

***

## Technology Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**