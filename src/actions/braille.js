let Braille = {
    a: [1,0,0,0,0,0],
    b: [1,0,1,0,0,0],
    c: [1,1,0,0,0,0],
    d: [1,1,0,1,0,0],
    e: [1,0,0,1,0,0],
    f: [1,1,1,0,0,0],
    g: [1,1,1,1,0,0],
    h: [1,0,1,1,0,0],
    i: [0,1,1,0,0,0],
    j: [0,1,1,1,0,0],
    k: [1,0,0,0,1,0],
    l: [1,0,1,0,1,0],
    m: [1,1,0,0,1,0],
    n: [1,1,0,1,1,0],
    o: [1,0,0,1,1,0],
    p: [1,1,1,0,1,0],
    q: [1,1,1,1,1,0],
    r: [1,0,1,1,1,0],
    s: [0,1,1,0,1,0],
    t: [0,1,1,1,1,0],
    u: [1,0,0,0,1,1],
    v: [1,0,1,0,1,1],
    w: [0,1,1,1,0,1],
    x: [1,1,0,0,1,1],
    y: [1,1,0,1,1,1],
    z: [1,0,0,1,1,1],
    space: [0,0,0,0,0,0],
    exclamation: [0,0,1,1,1,0],
    comma: [0,0,1,0,0,0],
    period: [0,0,1,1,0,1],
    question: [0,0,1,0,1,1],
};

function characterToBraille(character) {
    switch(character) {
        case ' ':
            return Braille.space;
        case '!': 
            return Braille.exclamation;
        case ',':
            return Braille.comma;
        case '.':
            return Braille.period;
        case '?':
            return Braille.question;
        case '0':
            return Braille.j;
        case '1':
            return Braille.a;
        case '2':
            return Braille.b;
        case '3':
            return Braille.c;
        case '4':
            return Braille.d;
        case '5':
            return Braille.e;
        case '6':
            return Braille.f;
        case '7':
            return Braille.g;
        case '8':
            return Braille.h;
        case '9':
            return Braille.i;
        default:
            return Braille[character];
    }
};

function sentenceToBraille(sentence) {
    let brailleForm = [];
    sentence.forEach(word => {
        for(let i = 0; i < word.length; i++) {
            brailleForm.push({character: word[i], dots: characterToBraille(word[i])});
        };
        brailleForm.push({character: ' ', dots: characterToBraille(' ')});
    });
    return brailleForm;
};

export default sentenceToBraille;