let Morse = {
    a: [0,1],
    b: [1,0,0,0],
    c: [1,0,1,0],
    d: [1,0,0],
    e: [0],
    f: [0,0,1,0],
    g: [1,1,0],
    h: [0,0,0,0],
    i: [0,0],
    j: [0,1,1,1],
    k: [1,0,1],
    l: [0,1,0,0],
    m: [1,1],
    n: [1,0],
    o: [1,1,1],
    p: [0,1,1,0],
    q: [1,1,0,1],
    r: [0,1,0],
    s: [0,0,0],
    t: [1],
    u: [0,0,1],
    v: [0,0,0,1],
    w: [0,1,1],
    x: [1,0,0,1],
    y: [1,0,1,1],
    z: [1,1,0,0],
    one: [0,1,1,1,1],
    two: [0,0,1,1,1],
    three: [0,0,0,1,1],
    four: [0,0,0,0,1],
    five: [0,0,0,0,0],
    six: [1,0,0,0,0],
    seven: [1,1,0,0,0],
    eight: [1,1,1,0,0],
    nine: [1,1,1,1,0],
    zero: [1,1,1,1,1],
    space: ['space'],
    endLetter: ['endLetter']
};

function characterToMorse(character) {
    switch(character) {
        case ' ':
            return Morse.space;
        case '0':
            return Morse.zero;
        case '1':
            return Morse.one;
        case '2':
            return Morse.two;
        case '3':
            return Morse.three;
        case '4':
            return Morse.four;
        case '5':
            return Morse.five;
        case '6':
            return Morse.six;
        case '7':
            return Morse.seven;
        case '8':
            return Morse.eight;
        case '9':
            return Morse.nine;
        default:
            return Morse[character];
    }
};

function sentenceToMorse(sentence) {
    let MorseForm = [];
    sentence.forEach(word => {
        for(let i = 0; i < word.length; i++) {
            MorseForm.push({character: word[i], code: characterToMorse(word[i])});
            MorseForm.push({character: '', code: Morse.endLetter});
        };
        MorseForm.push({character: ' ', code: characterToMorse(' ')});
        MorseForm.push({character: '', code: Morse.endLetter});
    });
    return MorseForm;
};

export default sentenceToMorse;