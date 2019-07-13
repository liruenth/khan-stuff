let verbs = ["ran", "walked", "roared", "screamed", "pattered", "is shaking", "was yawning", "lied", "will eat", "swallows", "kicks", "hugs", "tests", "killed", "hunted"];
let adjectives = ["quick", "shaky", "quiet", "small", "large", "big", "tiny", "insignificant", "silly", "boring", "rude", "benevolent", "majestic", "mighty", "great", "amazing", "talented", "incredible", "wonderful", "valuable", "loved", "good", "wise", "worthy", "brave", "real", "pretty", "beautiful", "bold", "tough"];
let adverbs = ["quickly", "shakily", "quiveringly", "quietly", "roudily", "softly", "fiercly", "loudly", "gently", "roughly", "angrily", "mean spiritedly", "mightily"];
let prepositions = ["at", "by", "next to", "beside", "against", "above", "below", "beneath", "aboard", "on", "with", "without", "within"];
let nouns = ["dog", "cat", "bird", "dragon", "queen", "cheetah", "lion", "ox", "zebra", "eagle", "dragon", "teenager", "parent", "cow", "yak", "donkey", "ogre", "song", "tune", "ball", "map", "earth", "sun", "apple", "babboon", "gorrilla", "fox", "shepherd", "coyote"];
let articles = ["a", "the"];
let conjunctions = ["because" , "since", "it came to pass that", "now we see that", "now behold", "verily verily"];
let scentence = [];

function getRand(max) {
    return Math.floor(Math.random() * max); 
}

function addElement() {
    return Math.random() >= 0.5;
};

function addWord(s, type) {
    switch(type) {
        case 'adj':
            s.push(adjectives[getRand(adjectives.length)]);
            break;
        case 'adv':
            s.push(adverbs[getRand(adverbs.length)]);
            break;
        case 'art':
            s.push(articles[getRand(articles.length)]);
            break;
        case 'c':
            s.push(conjunctions[getRand(conjunctions.length)]);
            break;
        case 'n':
            s.push(nouns[getRand(nouns.length)]);
            break;
        case 'p':
            s.push(prepositions[getRand(prepositions.length)]);
            break;
        case 'v':
            s.push(verbs[getRand(verbs.length)]);
            break;
        default:
            break;
    }
}

function getObjectPhrase(s, afterVerb = false) {
    if(afterVerb || addElement()) {
        addWord(s, 'p');
        getSubjectPhrase(s);
    } else {
        addWord(s, 'n');   
    }
};

function getSubjectPhrase(s) {
    if(addElement()) {
        addWord(s, 'art');
        if(addElement()) {
            addWord(s, 'adj');   
        }
    }
    
    addWord(s, 'n');
};

function getVerbPhrase(s, afterNoun) {
    if(addElement() && afterNoun) {
        s.push("that");   
    }
    
    addWord(s, 'v');
    
    if(addElement()) {
        addWord(s, 'adv');   
    }
};


function generateScentence() {
    scentence = [];
    var hasNoun= false;
        
    if (addElement()) {
        hasNoun = true;
        getSubjectPhrase(scentence);
        while(addElement()) {
            scentence.push(addElement() ? "and" : "or");
            getSubjectPhrase(scentence);
        }
    }
    
    var loop;
    do {
        loop = addElement();
        getVerbPhrase(scentence, hasNoun);
        if(addElement()) {
            getObjectPhrase(scentence, true);
        }
        if (loop) {
            scentence.push(addElement() ? "and" : "or");   
        }
    } while(loop);
    return scentence;
}

export default generateScentence;