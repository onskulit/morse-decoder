const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = expr.split('');
    
    // get array for binary expressed letters
    let binaryArr = [];
    for (let i = 0; i < exprArr.length; i += 10) {
        binaryArr.push(exprArr.slice(i, i + 10));
    }

    // get array for morse expressed letters
    let morseArr = binaryArr.map((letter) => {
        
        // space check
        if (letter[0] === '*') {
            return ' ';
        }

        let letterArr = [];
        for (let i = 0; i < letter.length; i += 2) {
            if (letter[i] === '1' && letter[i + 1] === '0') {
                letterArr.push('.');
            } else if (letter[i] === '1' && letter[i + 1] === '1') {
                letterArr.push('-');
            }
        }
        return letterArr.join('');
    });

    // get sentence
    let sentence = morseArr.map((letter) => {

        if (letter === ' ') {
            return ' ';
        }

        return MORSE_TABLE[letter];
    }).join('');

    return sentence;
}

module.exports = {
    decode
}