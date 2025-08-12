# JavaScript Text Tokenizer

A simple, self-contained web application for text tokenization. This tool, built with vanilla JavaScript, HTML, and CSS, allows you to convert text into a sequence of numerical tokens based on a defined character vocabulary and decode them back into text.

***

## Live Demo

**[➡️ View Live Demo](https://tokenizer-silk.vercel.app/)**

***

## Features

* **Text-to-Token Encoding**: Converts input text into an array of numbers.
* **Token-to-Text Decoding**: Reconstructs text from a sequence of number tokens.
* **Comprehensive Vocabulary**: The default character set is extensive, including lowercase letters, numbers, a wide range of symbols, and whitespace characters. It remains easily configurable.
* **Clean File Structure**: Code is separated into `index.html` for structure and `script.js` for logic, making it easy to maintain.
* **No Dependencies**: Runs in any modern browser without needing external libraries.

***

## How to Use (Local Setup)

1.  **Download the Files**: Clone the repository or download all the project files (`index.html`, `script.js`).
2.  **Keep Files Together**: Place both `index.html` and `script.js` in the same folder.
3.  **Open in Browser**: Open the `index.html` file in any modern web browser. The application will be ready to use.

***

## How It Works

The application's logic is located in the **`script.js`** file and linked to `index.html`.

### 1. Vocabulary Generation

Upon loading, a vocabulary is programmatically generated from a `characterSet` string.
* `vocab`: An object that maps each character to a unique number.
* `reverseVocab`: An object that maps each number back to its character.

### 2. Encoding (`encode()` function)

The `encode()` function takes a string as input, converts it to lowercase, and maps each character to its corresponding number from the `vocab`. If a character is not found, it's mapped to the special "unknown" token `0`.

### 3. Decoding (`decode()` function)

The `decode()` function takes an array of numbers and maps each number back to its character using the `reverseVocab`. If it encounters the token `0`, it outputs a placeholder string `"-*-"`.

***

## Technology Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**