import React from 'react';
import './../App.css';
import MorseCode from '../components/morseCode.js';
import generateSentence from '../actions/sentenceGenerator.js';
import sentenceToMorse from '../actions/morse.js';
// import morseToSound from '../actions/music.js';
let num = 0;

class morsePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            morse: [],
            allShown: false,
        }
    };

    loadMorse = () => {
        let Sentence = generateSentence();
        console.log(Sentence);
        let morse = sentenceToMorse(Sentence);
        console.log(morse);
        this.setState({
            morse,
            allShown: false,
        });
        console.log(this.state.morse);
    };

    showAll = () => {
        this.setState({
            allShown: !this.state.allShown,
        })
    };

    playSound = () => {

    };

    render(props) {
        return (
          <div className="App">
            <header className="App-header">
                <button onClick={this.loadMorse}><h2>Generate Sentence</h2></button>
                <button onClick={this.showAll}><h2>Show All</h2></button>
                <button onClick={this.playSound}><h2>Play Sound</h2></button>
            </header>
            <div className="line">
                {
                    this.state.morse.map(morse => {
                        num++;
                        return <MorseCode shown={this.state.allShown} key={num} code={morse.code} character={morse.character} />
                    })
                }
            </div>
          </div>
        );
    };
};

export default morsePage;