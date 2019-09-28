const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let morseCode = [''];
    let result = '';
    let morseLetter;
    for (let j = 0, k = 0; j < expr.length; j += 10, k++) {
        morseLetter = String(+(expr.slice(j, j + 10)));
        for (let i = 0; i < morseLetter.length; i += 2) {
            if (morseLetter[i] + morseLetter[i + 1] == '10')
                morseCode[k] += '.';
            else if (isNaN(morseLetter))
                morseCode[k] += ' ';
            else
                morseCode[k] += '-';
        }
        morseCode[k + 1] = '';
    }
    for (let i = 0; i < morseCode.length - 1; i++) {
        if (MORSE_TABLE[morseCode[i]]) {
            result += MORSE_TABLE[morseCode[i]];
        } else
            result += ' ';
    }
    return result;
}

module.exports = {
    decode
}