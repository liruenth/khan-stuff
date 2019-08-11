import React from 'react';
import './../App.css';
import MorseChar from '../components/morseChar.js';
import generateSentence from '../actions/sentenceGenerator.js';
import MorseActions from '../actions/morse.js';
import MusicActions from '../actions/music.js';
let { playMusic, stopMusic } = MusicActions

let num = 0;

class morsePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            morse: [],
            allShown: false,
            soundOnly: false,
            noteList: [],
            tempo: 480,
            sentence: '',
        }
    };

    loadMorse = () => {
        let sentence = generateSentence();
        console.log(sentence);
        let morse = MorseActions.sentenceToMorse(sentence);
        console.log(morse);
        this.setState({
            morse,
            allShown: false,
            noteList: [],
            currentCode: {char: 0, code: 0},
            sentence,
        });
        console.log(this.state.morse);
    };

    showAll = () => {
        this.setState({
            allShown: !this.state.allShown,
        })
    };

    displayCurrentCode = (charNum) => {
        if (charNum > this.state.currentCode.char) {
            this.setState({
                currentCode: {char: charNum, code: 0}
            })
        } else {
            this.setState({
                currentCode: {char: this.state.currentCode.char, code: this.state.currentCode.code + 1}
            })
        }
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    stopSound = () => {
        stopMusic();
    }

    playSound = () => {
        let nl = [];
        if (this.state.noteList.length === 0) {
            this.state.morse.map((character, i) => {
                character.code.map(code => {
                    nl.push({note: code.note, len: code.len, charNum: i});
                })
            })
            this.setState({
                noteList: nl
            })
        } else {
            nl = this.state.noteList;
        }
        this.setState({
            currentCode: {char: 0, code: 0}
        })

        var delayNext = 0;
        for (var i = 0; i < nl.length; i++) {
            setTimeout(this.displayCurrentCode, delayNext * 1000 * ( 60 / this.state.tempo ), nl.charNum);
            delayNext += nl.len;
        }

        playMusic(nl, this.state.tempo, this.displayCurrentCode);
    };

    render(props) {
        return (
          <div className="App">
            <textarea name='sentence'></textarea>
            <header className="App-header">
                <button onClick={this.loadMorse}><h2>Convert to Morse</h2></button>
                <button onClick={this.loadMorse}><h2>Generate Sentence</h2></button>
                <button onClick={this.showAll}><h2>Show All</h2></button>
                <button onClick={this.playSound}><h2>Play Sound</h2></button>
                <button onClick={this.stopSound}><h2>Stop Sound</h2></button>
                <label className="largeLabel">Tempo (bpm)</label>
                <input className="increment" type="number" name="tempo" step="30" onChange={this.handleChange} value={this.state.tempo}></input>
            </header>
            <div className="line">
                {
                    this.state.morse.map(morse => {
                        num++;
                        return <MorseChar shown={this.state.allShown} key={num} code={morse.code} character={morse.character} />
                    })
                }
            </div>
          </div>
        );
    };
};

export default morsePage;